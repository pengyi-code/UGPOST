import { siteContent } from './content';

function App() {
  return (
    <div className="page-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-grid" />

      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark" />
          <span className="brand-text">
            <strong>迷舟</strong>
            <span>五轴后处理教程</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="主导航">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">{siteContent.hero.eyebrow}</span>
            <h1>{siteContent.hero.title}</h1>
            <p className="hero-description">{siteContent.hero.description}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={siteContent.hero.primaryCta.href}>
                {siteContent.hero.primaryCta.label}
              </a>
              <a className="button button-secondary" href={siteContent.hero.secondaryCta.href}>
                {siteContent.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-inner">
              <p className="panel-label">课程定位</p>
              <h2>{siteContent.hero.panelTitle}</h2>
              <p>{siteContent.hero.panelDescription}</p>
              <div className="metrics">
                {siteContent.hero.metrics.map((metric) => (
                  <article key={metric.value} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="value">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow">课程价值</span>
            <h2>{siteContent.value.title}</h2>
            <p>{siteContent.value.description}</p>
          </div>

          <div className="value-grid">
            {siteContent.valueCards.map((card) => (
              <article key={card.title} className="glass-card value-card">
                <span className="card-index" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>

          <div className="audience-strip glass-card">
            <p className="strip-title">适合这些学习与合作场景</p>
            <div className="tag-list">
              {siteContent.audiences.map((audience) => (
                <span key={audience} className="tag">
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="modules">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow">课程模块</span>
            <h2>{siteContent.modulesHeading.title}</h2>
            <p>{siteContent.modulesHeading.description}</p>
          </div>

          <div className="module-grid">
            {siteContent.modules.map((module, index) => (
              <article key={module.title} className="module-card glass-card">
                <div className="module-image-wrap">
                  <img src={module.image} alt={module.alt} className="module-image" />
                  <div className="module-overlay" />
                  <span className="module-count">0{index + 1}</span>
                </div>
                <div className="module-body">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section capability-section" id="capabilities">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow">开发能力</span>
            <h2>{siteContent.capabilitiesHeading.title}</h2>
            <p>{siteContent.capabilitiesHeading.description}</p>
          </div>

          <div className="capability-layout">
            <div className="capability-panel glass-card">
              <p className="panel-label">开发关注点</p>
              <ul className="line-list">
                {siteContent.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="capability-panel glass-card">
              <p className="panel-label">学完后的能力结果</p>
              <ul className="line-list outcome-list">
                {siteContent.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="audience">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow">适合谁</span>
            <h2>{siteContent.audienceHeading.title}</h2>
          </div>

          <div className="persona-grid">
            {siteContent.personas.map((item) => (
              <article key={item.title} className="persona-card glass-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card glass-card">
            <div className="contact-copy">
              <span className="eyebrow">联系方式</span>
              <h2>{siteContent.contact.title}</h2>
              <p>{siteContent.contact.description}</p>
              <p className="contact-note">{siteContent.contact.note}</p>

              <p className="scan-tip">{siteContent.contact.tip}</p>
            </div>

            <div className="qr-card">
              <img src={siteContent.contact.qrImage} alt={siteContent.contact.qrAlt} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

