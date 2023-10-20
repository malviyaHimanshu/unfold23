import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { UserStateContext } from "../../context/UserContext";

import Button from "../button";
import ContextMenu from "../contextMenu";
import styles from "./styles.module.scss";
import GithubIcon from "../../images/github.svg";
import UserIcon from "../../images/user.svg";

import { ConnectButton } from '@rainbow-me/rainbowkit';


const Layout = ({ children }) => {
  const router = useRouter();
  const state = useContext(UserStateContext);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  }

  const sendInvite = () => {
    // send invite
  }

  const isLoginPage = router.pathname === "/login";
  const isAuth = state.isAuth;

  const toggleContextMenu = () => {
    setIsContextMenuOpen(!isContextMenuOpen);
  };

  const closeContextMenu = () => {
    setIsContextMenuOpen(false);
  };

  const handleNavigation = (path) => {
    closeContextMenu();
    router.push(path);
  };

  return (
    <div id="layoutRoot">
      <Head>
        <title>Canvas</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      { showPopup && (
        <div className={styles.sharePopupBg} style={{position: 'fixed', height: '100vh', width: '100vw', top: 0, right: 0, left: 0, bottom: 0, display: "grid", placeContent: 'center'}}>
          <div className={styles.popup}>
            <h2>Enter Account Address</h2>
            <input type="text" id="metaMaskAddress" placeholder="0xDef03x.....3sd90" />

            <div className={styles.buttons}>
              <button className={styles.send} onClick={sendInvite}>Send Invite</button>
              <button className={styles.cancel} onClick={closePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <header className={styles.headerBar}>
        <div className={styles.logo}>
          <a href="/" role="link" tabIndex="0">
            Canvas
          </a>
        </div>
        <nav className={styles.nav}>
          <button className={styles.shareButton} onClick={openPopup}>Share</button>
          <a href="/marketplace" className={styles.marketplaceLink} style={{fontWeight: '700'}}>Marketplace</a>
          {/* <ConnectButton showBalance={true} /> */}



          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <div onClick={openConnectModal} style={{cursor: 'pointer'}}>
                          <Button>Connect Wallet</Button>
                        </div>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div style={{ display: 'flex', gap: 0}}>
                        <button onClick={openChainModal} className="chain-button" style={{ display: 'flex', alignItems: 'center', background: 'none', padding: '0 2rem', border: 'solid 1px #303030', borderTop: 'none', borderBottom: 'none', fontFamily: "'JetBrains Mono', monospace", fontWeight: '700', fontSize: '16px' }}>
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? 'Chain icon'}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>
                        
                        <div onClick={openAccountModal} style={{cursor: 'pointer'}}>
                          <Button>
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''}
                          </Button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>




          {/* {!isLoginPage && !isAuth && <Button href="/login">Connect Wallet</Button>} */}
          {!isLoginPage && isAuth && (
            <div className={styles.user}>
              <span
                role="button"
                tabIndex="0"
                onClick={() => toggleContextMenu()}
              >
                <img src={UserIcon} alt="User Icon" />
              </span>
            </div>
          )}
          {!isLoginPage && isAuth && isContextMenuOpen && (
            <ContextMenu
              menuItems={[
                {
                  id: "pages",
                  label: "Pages",
                  action: () => handleNavigation("/pages"),
                },
                {
                  id: "account",
                  label: "Account",
                  action: () => handleNavigation("/account"),
                },
                {
                  id: "logout",
                  label: "Logout",
                  action: () => handleNavigation("/logout"),
                },
              ]}
              closeAction={() => closeContextMenu()}
              isTopNavigation={true}
            />
          )}
        </nav>
      </header>

      <main className={styles.content}>{children}</main>
      {/* <footer className={styles.footerBar}>
        <hr className={styles.hr} />
        <div className={styles.github}>
          <a
            href="https://github.com/konstantinmuenster/notion-clone"
            rel="noopener noreferrer"
            role="link"
            tabIndex="0"
          >
            <img src={GithubIcon} alt="Github Icon" />
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default Layout;
