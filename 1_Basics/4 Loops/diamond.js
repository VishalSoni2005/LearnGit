function Diamond(n) {
    if (n % 2 === 0) n++; // ensure n is odd
    let mid = Math.floor(n / 2);
    
    for (let i = 0; i < n; i++) {
      let stars = 2 * (mid - Math.abs(mid - i)) + 1;
      let spaces = Math.abs(mid - i);
      
      let row = '';
      
      // Add spaces
      for (let j = 0; j < spaces; j++) {
        row += ' ';
      }
      
      // Add stars
      for (let j = 0; j < stars; j++) {
        row += '*';
      }
      
      console.log(row);
    }
  }
let n = 222;
Diamond(n);