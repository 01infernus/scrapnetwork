// replace {{ year }} with current year
document.body.innerHTML = document.body.innerHTML.replace(/{{ year }}/gmi,function(){return new Date().getFullYear()})