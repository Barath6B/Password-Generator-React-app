function pinGenerator(passLength) {
    const nums = "1234567890";
    let password = '';

    for(let i=0;i<passLength;i++) {
        const randIdx = Math.floor(Math.random() * nums.length);
        password += nums[randIdx];
    }
    return password;
}
export default pinGenerator;