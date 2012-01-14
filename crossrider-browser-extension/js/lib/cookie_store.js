var CookieStore={_db:null,init:function(a){this._db=openDatabase("crossrider_cookies_"+a,1,"Crossrider Cookies Store",10485760);this._db.transaction(function(a){a.executeSql("create table if not exists cookies(name varchar(255) primary key, value longtext, created_at datetime default (datetime('now','localtime')), expires datetime)",[])});this._db.transaction(function(a){a.executeSql("delete from cookies where datetime(expires) < datetime('now'))")})},getCookies:function(a){this._db.transaction(function(b){b.executeSql("select name,value,expires from cookies where datetime(expires) >= datetime('now')",
[],function(b,e){cookies={};for(var c=0;c<e.rows.length;c++){var d=e.rows.item(c),g=JSON.parse(d.value);cookies[d.name]={value:g.value,expires:this._formatDateFromDateTime(d.expires)}}a(cookies)}.bind(this),function(){Crossrider.Utils.internalDebug("getCookies error",arguments)})}.bind(this))},setCookie:function(a,b,f,e){this._db.transaction(function(c){var d=this._formatDateTimeFromDate(f),g=JSON.stringify({value:b});c.executeSql("replace into cookies (name,value,expires) values(?,?,?)",[a,g,d],
e,function(){Crossrider.Utils.internalDebug("cookie set failed",arguments)})}.bind(this))},unsetCookie:function(a,b){this._db.transaction(function(f){f.executeSql("delete from cookies where name = ?",[a],b,function(){Crossrider.Utils.internalDebug("cookie unset failed",arguments)})})},clearData:function(){this._db.transaction(function(a){a.executeSql("drop table cookies",[],function(){},function(){Crossrider.Utils.internalDebug("cookies clearing failed",arguments)})})},_formatDateTimeFromDate:function(a){var a=
new Date(a),b=a.getMonth()+1,f=a.getDate(),e=a.getHours(),c=a.getMinutes(),d=a.getSeconds();10>b&&(b="0"+b.toString());10>f&&(f="0"+f.toString());10>e&&(e="0"+e.toString());10>c&&(c="0"+c.toString());10>d&&(d="0"+d.toString());return[[a.getFullYear(),b,f].join("-"),[e,c,d].join(":")].join(" ")},_formatDateFromDateTime:function(a){var b=a.split(" "),a=b[0].split("-"),b=b[1].split(":");return(new Date(a[0],parseInt(a[1])-1,a[2],b[0],b[1],b[2])).getTime()}};