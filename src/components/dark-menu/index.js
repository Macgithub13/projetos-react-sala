import './index.scss';

export default function Cabecalho(){

    return(
    
        <header className='cabecalho-dark'>

            <div className='logo'>

                <img src='/assets/images/dark-header.png' alt=''/>
                <p>portfolio.me</p>
            </div>

            <nav className='menu'>

                <button>
                    <div>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.74929 14.6419V10.2669H10.2493V14.6419C10.2493 15.1231 10.643 15.5169 11.1243 15.5169H13.7493C14.2305 15.5169 14.6243 15.1231 14.6243 14.6419V8.51685H16.1118C16.5143 8.51685 16.7068 8.0181 16.4005 7.7556L9.08554 1.16685C8.75304 0.869351 8.24554 0.869351 7.91304 1.16685L0.598042 7.7556C0.300542 8.0181 0.484292 8.51685 0.886792 8.51685H2.37429V14.6419C2.37429 15.1231 2.76804 15.5169 3.24929 15.5169H5.87429C6.35554 15.5169 6.74929 15.1231 6.74929 14.6419Z" fill="#F8F8F8"/>
                        </svg>
                        Página Inicial
                    </div>
                </button>

                <button>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7656 12.6908L16.7031 16.6038" stroke="#F8F8F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.84375 13.9951C11.2869 13.9951 14.0781 11.2212 14.0781 7.79947C14.0781 4.37771 11.2869 1.60382 7.84375 1.60382C4.4006 1.60382 1.60938 4.37771 1.60938 7.79947C1.60938 11.2212 4.4006 13.9951 7.84375 13.9951Z" stroke="#F8F8F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Pesquisa
                    </div>
                </button>
                
                <button>
                    <div>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0625 1.51141H2.9375C2.5894 1.51141 2.25556 1.64969 2.00942 1.89584C1.76328 2.14198 1.625 2.47582 1.625 2.82391V15.9489C1.625 16.297 1.76328 16.6308 2.00942 16.877C2.25556 17.1231 2.5894 17.2614 2.9375 17.2614H16.0625C16.4106 17.2614 16.7444 17.1231 16.9906 16.877C17.2367 16.6308 17.375 16.297 17.375 15.9489V2.82391C17.375 2.47582 17.2367 2.14198 16.9906 1.89584C16.7444 1.64969 16.4106 1.51141 16.0625 1.51141Z" stroke="#F8F8F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.625 5.44891H17.375M13.4375 1.51141L10.8125 5.44891M8.1875 1.51141L5.5625 5.44891M7.96875 11.1364V8.48429L10.2656 9.80991L12.5625 11.1364L10.2656 12.4625L7.96875 13.7885V11.1364Z" stroke="#F8F8F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Reels
                    </div>
                </button>
                
                <button>
                    <div>
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.625 15.3864L2.7625 11.9739C0.729 8.96654 1.51475 5.08591 4.6 2.89666C7.68525 0.70829 12.1163 0.887665 14.9644 3.31666C17.8125 5.74654 18.1975 9.67442 15.8648 12.505C13.532 15.3357 9.20162 16.1932 5.7375 14.5114L1.625 15.3864Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Mensagens
                    </div>
                </button>
                
                <button>
                    <div>
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5625 1.38641C3.90469 1.38641 1.75 3.5411 1.75 6.19891C1.75 11.0114 7.4375 15.3864 10.5 16.404C13.5625 15.3864 19.25 11.0114 19.25 6.19891C19.25 3.5411 17.0953 1.38641 14.4375 1.38641C12.81 1.38641 11.3706 2.19448 10.5 3.43129C10.0562 2.79919 9.4667 2.28333 8.7813 1.92738C8.0959 1.57143 7.33482 1.38587 6.5625 1.38641Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Notificações
                    </div>
                </button>
                
                <button>
                    <div>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2.63641H7C4.10462 2.63641 1.75 4.99104 1.75 7.88641V19.2614C1.75 19.4935 1.84219 19.716 2.00628 19.8801C2.17038 20.0442 2.39294 20.1364 2.625 20.1364H14C16.8954 20.1364 19.25 17.7818 19.25 14.8864V7.88641C19.25 4.99104 16.8954 2.63641 14 2.63641ZM17.5 14.8864C17.5 16.8167 15.9303 18.3864 14 18.3864H3.5V7.88641C3.5 5.95616 5.06975 4.38641 7 4.38641H14C15.9303 4.38641 17.5 5.95616 17.5 7.88641V14.8864Z" fill="#F8F8F8"/>
                            <path d="M11.375 7.01141H9.625V10.5114H6.125V12.2614H9.625V15.7614H11.375V12.2614H14.875V10.5114H11.375V7.01141Z" fill="#F8F8F8"/>
                        </svg>
                        Criar
                    </div>
                </button>
                
            </nav>
        </header>
    );
}