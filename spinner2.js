// creat a var that contains all my moves 
// loop through it while increaseing my count on each move 
// create a page break



let spin = ['\r  ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ','\r  ' ,'\rW   ','\rE  ', '\rW ','\rO', '\rN  ','\r  ']

  let timeOut = 100
  for (const char of spin) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeOut += 300)
  }

  setTimeout(() => {
    console.log('\n');
  }, timeOut);