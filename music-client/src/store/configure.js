const configure = {
    state:{
        HOST: 'http://127.0.0.1:8888',  //后台访问地址根目录
        activeName: '',                  //当前选中的菜单名
        showAside: false,               //是否显示播放中的歌曲列表
        loginIn: false,                 //用户是否已登录
    },
    getters: {
        activeName: state => {
            let activeName = state.activeName
            if(!activeName){
                activeName = JSON.parse(window.sessionStorage.getItem('activeName')) 
            }
            return activeName
        },
        showAside: state => {
            let showAside = state.showAside
            if(!showAside){
                showAside = JSON.parse(window.sessionStorage.getItem('showAside')) 
            }
            return showAside
        },
        loginIn: state => {
            let loginIn = state.loginIn
            if(!loginIn){
                loginIn = JSON.parse(window.sessionStorage.getItem('loginIn')) 
            }
            return loginIn
        }
        
    },
    mutations: {
        setActiveName: (state,activeName) => {
            state.activeName = activeName
            window.sessionStorage.setItem('activeName',JSON.stringify(activeName))
        },
        setShowAside: (state,showAside) => {
            state.showAside = showAside
            window.sessionStorage.setItem('showAside',JSON.stringify(showAside))
        },
        setLoginIn: (state,loginIn) => {
            state.loginIn = loginIn
            window.sessionStorage.setItem('loginIn',JSON.stringify(loginIn))
        }
    }
}

export default configure