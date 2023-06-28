{
    const x = 1;
    {
        const y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
}

const text = 'global'; // 전역변수, 전역스코프
{
    const text = 'inside block1'; // 지역변수, 지역스코프
    {
        const text = 'inside block2';
        console.log(text);
    }
}
