import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className="footer">
      <button className="footer-button" onClick={toggleDetails}>
        {isExpanded ? 'Hide Details' : 'See More About Me'}
      </button>
      {isExpanded && (
        <div className="footer-details">
          <p>
            主体的に学んできたのは、<span className="highlight">JavaScript</span>です。
            現在となっては、<span className="highlight">TypeScript</span>を活用する機会も多く、Next.JsにTailewindCSSを組み合わせて日常的に学んでいる段階です。
            他、<span className="highlight">Python</span>も扱いやすいので、データを取得し、自動で更新するような仕組みを日常的に取り入れています。
            ご興味のある方は、<span className="highlight">ランサーズメッセージより</span>承ります。
            何卒よろしくお願い申し上げます。
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;