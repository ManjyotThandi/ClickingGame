(this.webpackJsonpclickguessgame=this.webpackJsonpclickguessgame||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":1,"image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"},{"id":2,"image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{"id":3,"image":"https://vignette.wikia.nocookie.net/spongebob/images/9/9e/Gary_looking_up_stock_art.png/revision/latest?cb=20181227162221"},{"id":4,"image":"https://clipart.wpblink.com/sites/default/files/wallpaper/jellyfish-clipart/256156/jellyfish-clipart-spongebob-character-256156-872403.png"},{"id":5,"image":"https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Pearl_Krabs.svg/220px-Pearl_Krabs.svg.png"},{"id":6,"image":"https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/220px-Mrs._Puff.svg.png"},{"id":7,"image":"https://vignette.wikia.nocookie.net/spongebob/images/a/ae/Squilliam_s6-p.png/revision/latest?cb=20190519114115"},{"id":8,"image":"https://vignette.wikia.nocookie.net/spongebob/images/a/a6/Karen_mobile_stock_art.png/revision/latest?cb=20181202012333"},{"id":9,"image":"https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png"}]')},32:function(e,t,a){e.exports=a(53)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(9),r=a.n(c);a(37),a(38),a(39);var s=function(e){return n.a.createElement("div",null,n.a.createElement("div",{onClick:e.handleClick,className:"card"},n.a.createElement("div",{"data-id":e.id,className:"img-container"},n.a.createElement("img",{alt:"LOL",src:e.image}))))};a(40);var l=function(e){return n.a.createElement("header",{className:"Header"},n.a.createElement("h1",{className:"Title"},e.children),n.a.createElement("p",{id:"innerText"},"Click on an image to earn points. Be careful not to click on the same image twice!"))},o=a(13),m=a(20),g=a(21),d=a(29),u=a(22),h=a(30),p=a(27),k=a(28);a(41);var v=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{collapseOnSelect:!0,className:"NavBar",sticky:"top",bg:"dark",variant:"dark"},n.a.createElement(k.a,{className:"mr-auto"},n.a.createElement("div",{className:"Text"},"Clicking Game"),n.a.createElement("div",{className:"Text"},"Score: ",e.score),n.a.createElement("div",{className:"Text"},"HighScore: ",e.highscore))))},f=a(16),b=a(26),E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={characters:o,idClicked:[],score:0,highScore:0},a.element=a.state.characters.map((function(e){return n.a.createElement(f.a,{key:e.id},n.a.createElement(s,Object.assign({key:e.id},e,{handleClick:function(){return a.handleClick(e.id)}})))})),a.idsClicked=[],a.arrayShuffle=function(e){var t,a;console.log(this.state.characters);for(var i=e.length-1;i>0;i--)t=Math.floor(Math.random()*(i+1)),a=e[i],e[i]=e[t],e[t]=a;return console.log(e),e},a.handleClick=function(e){var t=a.state.idClicked;console.log(t),t.includes(e)?a.state.score>a.state.highScore?a.setState({idClicked:[],score:0,highScore:a.state.score}):(console.log("LOSE"),a.setState({idClicked:[],score:0})):(a.idsClicked.push(e),a.setState({characters:a.arrayShuffle(a.state.characters),idClicked:a.idsClicked,score:a.state.score+1}))},a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(v,{highscore:this.state.highScore,score:this.state.score}),n.a.createElement(l,null,"CLICKY GAME"),n.a.createElement(b.a,null,this.state.characters.map((function(t){return n.a.createElement(f.a,{xs:"6",sm:"3",key:t.id},n.a.createElement(s,Object.assign({key:t.id},t,{handleClick:function(){return e.handleClick(t.id)}})))}))))}}]),t}(i.Component);var C=function(){return n.a.createElement(E,null)};r.a.render(n.a.createElement(C,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0c8ff580.chunk.js.map