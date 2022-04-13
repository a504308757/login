import React, { useRef } from 'react';
import './index.scss'
import { useMouse } from 'ahooks';

export default function Index() {
    const ref = useRef(null);
    const mouse = useMouse(ref.current);
    const demo: any = document.getElementById('demo')
    //鼠标进入div盒子触发
    const on = () => {
        let inX = mouse.clientX - mouse.elementPosX;
        let inY = mouse.clientY - mouse.elementPosY;
        demo.style.left = inX + 'px';
        demo.style.top = inY + 'px';
        demo.className = "on";

    }
    //鼠标移出div盒子触发
    const out = () => {
        let inX = mouse.clientX - mouse.elementPosX;
        let inY = mouse.clientY - mouse.elementPosY;
        demo.style.left = inX + 'px';
        demo.style.top = inY + 'px';
        demo.className = "out";
    }

    return (
        <>
            <div className='container' id='container' ref={ref} onMouseEnter={on} onMouseLeave={out}>
                <div className="tit">登录</div>
                <input type="text" placeholder='账号' />
                <input type="text" placeholder='密码' />
                <button>登录</button>
                <span style={{ zIndex: '1' }}>没有账号？<a href='/#'>去注册</a></span>

                <span className='demo' id='demo'></span>
            </div>
            <div className="square">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="circle">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <p>
                    鼠标位置 - x: {mouse.elementX}, y: {mouse.elementY}
                </p>
                <p>
                    div位置 - x: {mouse.elementPosX}, y: {mouse.elementPosY}
                </p>
                <p>
                    div大小 - width: {mouse.elementW}, height: {mouse.elementH}
                </p>
            </div>
        </>
    )
}
