import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-mark" aria-hidden="true">AI</div>
        <div>
          <p className="eyebrow">Data workspace</p>
          <h1>Your AI Data Analyst</h1>
        </div>
      </header>

      <main>
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Turn data into decisions</p>
          <h2 id="intro-title">Ask questions. Find clear answers.</h2>
          <p>
            Upload a CSV file and describe what you want to learn. Your analysis
            will be collected in one simple workspace.
          </p>
        </section>

        <div className="workspace">
          <section className="panel" aria-labelledby="upload-title">
            <div className="section-heading">
              <span className="step">01</span>
              <div>
                <h2 id="upload-title">Upload your data</h2>
                <p>Choose a CSV file to begin.</p>
              </div>
            </div>

            <label className="upload-area" htmlFor="csv-upload">
              <span className="csv-icon" aria-hidden="true">CSV</span>
              <span className="upload-title">Drag &amp; drop your CSV here</span>
              <span className="upload-help">or click to browse</span>
              <span className="upload-note">CSV files only</span>
              <input id="csv-upload" type="file" accept=".csv,text/csv" />
            </label>
          </section>

          <section className="panel" aria-labelledby="question-title">
            <div className="section-heading">
              <span className="step">02</span>
              <div>
                <h2 id="question-title">Business Question</h2>
                <p>Ask a question about the data you uploaded.</p>
              </div>
            </div>

            <label className="field-label" htmlFor="business-question">
              What would you like to know?
            </label>
            <div className="question-row">
              <input
                id="business-question"
                type="text"
                placeholder="For example: Which products grew the most last quarter?"
              />
              <button type="button">Analyze data</button>
            </div>
            <p className="field-note">Analysis functionality will be added later.</p>
          </section>

          <section className="panel insights" aria-labelledby="insights-title">
            <div className="section-heading">
              <span className="step">03</span>
              <div>
                <h2 id="insights-title">Insights</h2>
                <p>Your results will appear here.</p>
              </div>
            </div>

            <div className="empty-state">
              <span className="round-icon" aria-hidden="true">✦</span>
              <h3>Ready when you are</h3>
              <p>
                Once your data and question are submitted, a clear summary, key
                findings, and suggested next steps will appear in this area.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
