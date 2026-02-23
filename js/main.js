document.getElementById('providerForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for joining MzansiVerse! We will contact you soon.');
  this.reset();
});

// Placeholder for future AdMob, gameplay video, or dynamic app/game integration
console.log("MzansiVerse Hub initialized - placeholders ready");
document.getElementById('earlyForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('You are now on the MzansiVerse Early Access list!');
  this.reset();
});
