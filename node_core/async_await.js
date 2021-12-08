function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 5000);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 3000);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 2000);
    });
  }
  
  async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg(); // 🤡 lurks in the shadows <-- after 1 second