(function(exports,global){function Preferences(){this.playerName=localStorage["mem.player.name"],this.selectedLanguage=localStorage["mem.selected.language"]||"en"}function t(key){return translations[preferences.selectedLanguage][key]?translations[preferences.selectedLanguage][key]:"Translation missing for {"+key+"}"}function setHight(){document.getElementById("game").style.height=window.innerHeight+"px"}function Options(){this.form=document.getElementsByTagName("form")[0],this.saveButton=document.getElementById("save-button"),this.playerNameLabel=document.getElementById("player-name-label"),this.playerNameInput=document.getElementById("player-name"),this.languages=document.getElementsByName("selectedLanguage"),document.getElementsByTagName("h1")[0].innerHTML=t("options"),document.getElementsByTagName("h2")[0].innerHTML=t("language"),this.saveButton.value=t("save"),this.playerNameLabel.innerHTML=t("your_name"),this.playerNameInput.value=preferences.playerName;for(var i=0;this.languages.length>i;i++)this.languages[i].value===preferences.selectedLanguage&&(this.languages[i].checked="checked");this.form.addEventListener("submit",this.save)}global["true"]=exports,Preferences.prototype.save=function(){localStorage["mem.player.name"]=this.playerName,localStorage["mem.selected.language"]=this.selectedLanguage};var preferences=new Preferences,translations={en:{play:"Play",options:"Options",language:"Language",save:"Save",your_name:"Your name",you_win:"You win",restart:"Restart",quit:"Quit",clicks:"Clicks",pairs:"Pairs",time:"Time",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds"},sv:{play:"Spela",options:"Alternativ",language:"Språk",save:"Spara",your_name:"Ditt namn",you_win:"Du vinner",restart:"Starta om",quit:"Avsluta",clicks:"Klick",pairs:"Par",time:"Tid",hour:"timma",hours:"timmar",minute:"minut",minutes:"minuter",second:"sekund",seconds:"sekunder"}};document.addEventListener("touchmove",function(event){event.preventDefault()}),setHight(),window.onresize=setHight,Options.prototype.save=function(event){event.preventDefault(),preferences.playerName=options.playerNameInput.value;for(var i=0;options.languages.length>i;i++)options.languages[i].checked&&(preferences.selectedLanguage=options.languages[i].value);preferences.save(),window.location="index.html"};var options=new Options})({},function(){return this}());