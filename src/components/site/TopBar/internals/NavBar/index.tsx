/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Container } from "./styles";
import logo from "../../../../../assets/logog3.png";
import Content from "../../../Content";

const TopBar: React.FC = () => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <Content>
      <Container subMenuOpen={subMenu}>
        <a href="" title="G3 Infotech - Sua conexão com o mundo">
          <img
            src={logo}
            alt="G3 Infotech - Sua conexão com o mundo"
            title="G3 Infotech - Sua conexão com o mundo"
          />
        </a>
        <nav className="header_down_content_menu">
          <ul>
            <li>
              <a href="http://localhost/g3infotech">Home</a>
            </li>
            <li>
              <a href="?file=blog" title="Blog">
                Blog
              </a>
            </li>
            <li>
              <a href="?file=about">Sobre nós</a>
            </li>
            <li>
              <a href="?file=pricing">Nossos Planos</a>
            </li>
            <li>
              <a href="?file=contact">Contato</a>
            </li>
            <li>
              <a
                href="?file=subscribe"
                className="header_down_content_nav_sign"
                title="Assine já"
              >
                ASSINE JÁ
              </a>
            </li>
          </ul>
        </nav>

        <nav className="header_down_content_menu_mobile">
          <ul>
            <li>
              <FiMenu
                className="open-menu"
                size={20}
                onClick={() => setSubMenu(!subMenu)}
              />
              <FiX
                className="close-menu"
                size={20}
                onClick={() => setSubMenu(!subMenu)}
              />
            </li>
            <li className="header_down_content_menu_mobile_sub display_none">
              <ul>
                <li>
                  <a href="http://localhost/g3infotech">Home</a>
                </li>
                <li>
                  <a href="?file=blog" title="Blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="?file=about">Sobre nós</a>
                </li>
                <li>
                  <a href="?file=pricing">Nossos Planos</a>
                </li>
                <li>
                  <a href="?file=contact">Contato</a>
                </li>
                <li>
                  <a
                    href="?file=subscribe"
                    className="header_down_content_nav_sign"
                    title="Assine já"
                  >
                    ASSINE JÁ
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </Container>
    </Content>
  );
};

export default TopBar;
