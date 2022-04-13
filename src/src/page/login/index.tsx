import React from 'react'
import './index.scss'

export default function index() {
    return (
        <>
            <div className='container'>
                <div className="tit">登录</div>
                <input type="text" placeholder='账号' />
                <input type="text" placeholder='密码' />
                <button>登录</button>
                <span>没有账号？<a href='/#'>去注册</a></span>

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
        </>
    )
}
