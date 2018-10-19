/**
 * Created by 251845906 on 2018/8/13.
 */

import React,{ Component } from 'react';
import $ from 'jquery';
class Header extends Component{
    constructor(porps){
        super(porps)
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <div className="come">
                    <div className="container">
                        <p>
                            欢迎访问正康元官方网站
                            <span className="fr">
                                <a href="">招商加盟</a><span>|</span><a href="">联系我们</a>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="top">
                    <div className="container clearfix">
                        <div className="fl log">
                            <div className='fl'><img src={`images/log.png`} alt=""/></div>
                            <h1>中国•郑州瑞正生物科技有限公司</h1>
                            <p>打造中国畜禽肠胃道健康知名品牌</p>
                        </div>
                        <div className="tel fr clearfix">
                            <div className="iphone fl">
                                <span className=""><div className="icon"><img src={`images/toptel.png`} alt=""/></div>24小时热线电话:</span>
                                <p>0371-65341398</p>
                                <p>156-3881-6411</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <div className="container clearfix">
                        <div className="Item">
                            <a href="index.html">
                                <h3 className="active">网站首页</h3>
                            </a>
                        </div>
                        <div className="Item">
                            <a href="list_pic.html">
                                <h3>症状分类</h3>
                            </a>
                        </div>
                        <div className="Item">
                            <a href="list_pic.html">
                                <h3>家禽症状</h3>
                            </a>
                        </div>
                        <div className="Item">
                            <a href="list_pic.html">
                                <h3>产品分类</h3>
                            </a>
                        </div>
                        <div className="Item">
                            <a href="list_jianzheng.html">
                                <h3>综合解决方案</h3>
                            </a>
                        </div>
                        <div className="Item">
                            <a href="list_new.html">
                                <h3>养殖宝典</h3>
                            </a>
                        </div>
                        <div className="Item">
                            <a href="list_jianzheng.html">
                                <h3>客户见证</h3>
                            </a>
                        </div>
                        <div className="Item">
                            <a href="list_case.html">
                                <h3>公司案例</h3>
                            </a>
                        </div>
                        <div className="Item">
                            <a href="contact.html">
                                <h3>联系我们</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Footer extends Component{
    constructor(porps){
        super(porps)
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className="box" >
                <div className="container">
                    <div className="link">
                        <div className="tit">
                            友情链接/LINK
                        </div>
                        <div className="externalLink">
                            <a href="">余年网络</a>
                            <a href="">余年网络</a>
                            <a href="">余年网络</a>
                        </div>
                    </div>
                    <div className="fotCont clearfix">
                        <div className="information fl">
                            <div className="tel">
                                <span className=""><i className="icon iconfont icon-dianhua"></i>全国服务热线:</span>
                                <p>0371-65341398</p>
                            </div>
                            <h2>中国•郑州瑞正生物科技有限公司</h2>
                            <div className="mail">
                                <i className='icon iconfont icon-htmal5icon05'></i>邮箱：77870974@qq.com
                            </div>
                            <div className="site">
                                <i className='icon iconfont icon-dizhi'></i>地址：郑州市中牟县
                            </div>
                        </div>
                        <div className="fotNav fl">
                            <a href="">多喜应激宝</a>
                            <a href="">多喜美速净</a>
                            <a href="">禽用产品</a>
                            <a href="">招商加盟</a>
                            <a href="">养殖宝典</a>
                            <a href="">联系我们</a>
                        </div>
                        <div className="qr fr clearfix">
                            <div className="qrImg fl">
                                <img src="images/qr.png" alt=""/>
                            </div>
                            <div className="qrTex fl">
                                <p>扫一扫 <br/>正康元官方活动随时掌控还有礼品等你拿！</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <div className="container">
                        <p>CopyRight © 2018 郑州正康元生物科技有限公司 版权所有 信息产业部备案号（豫ICP备1000000000号-1 ）<a href="" className="fr">技术支持：余年网络</a></p>
                    </div>

                </div>
            </div>
        )
    }
}

class Paging extends React.Component{
    constructor(porps){
        super(porps)
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className="paging">
                <a href="" className="prev">上一页</a>
                <div className="yema">
                    <a href="" className="active">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">5</a>
                    <a href="">6</a>
                    <a href="">7</a>
                    <a href="">8</a>
                    <a href="">9</a>
                    <a href="">10</a>
                </div>
                <a href="" className="next">下一页</a>
                <select>
                    <option>10/页</option>
                    <option>20/页</option>
                    <option>30/页</option>
                    <option>40/页</option>
                </select>
            </div>
        )
    }
}

export  { Header, Footer ,Paging}