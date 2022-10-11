<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="main-timeline">
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year">Q1<br />2022</div>
            <h3 class="title">Initial Idea</h3>
            <p class="description" />
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year">Apr<br />2022</div>
            <h3 class="title">Project Started</h3>
            <p class="description" />
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year" style="right: -58px;">May-Sep<br />2022</div>
            <h3 class="title">Raising Capital</h3>
            <p class="description" />
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year">Oct<br />2022</div>
            <h3 class="title">Alpha</h3>
            <p class="description" />
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year">Oct<br />2022</div>
            <h3 class="title">Team of 6</h3>
            <p class="description" />
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year">Dec<br />2022</div>
            <h3 class="title">Beta</h3>
            <p class="description" />
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year">Q1<br />2023</div>
            <h3 class="title">Options for NFTs and game commodity portfolios</h3>
            <p class="description" />
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year">Mar<br />2023</div>
            <h3 class="title">ML Based Fees for Options</h3>
            <p class="description" />
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-content">
            <div class="timeline-year">Mar<br />2023</div>
            <h3 class="title">Simple Leverage</h3>
            <p class="description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../main.scss";
  .main-timeline:after {
    content: "";
    display: block;
    clear: both;
  }
  .main-timeline .timeline {
    width: calc(50% + 58px);
    border-top: 2px solid #404247;
    float: left;
    position: relative;
    z-index: 1;
  }
  .main-timeline .timeline:before {
    content: "";
    background: #404247;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    position: absolute;
    top: -5px;
    right: 0;
  }
  .main-timeline .timeline-content {
    color: #404247;
    text-align: center;
    padding: 15px 80px 15px 10px;
    display: block;
    position: relative;
  }
  .main-timeline .timeline-content:hover {
    text-decoration: none;
  }
  .main-timeline .timeline-content:before {
    content: "";
    background: $cstm-col3;
    width: 15px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 50px;
  }
  .main-timeline .timeline-year {
    font-size: 35px;
    line-height: 35px;
    font-weight: 700;
    transform: translateY(-50%) rotate(90deg);
    position: absolute;
    top: 50%;
    // right: -15px; original
    right: -28px;
  }
  .main-timeline .title {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 0 0 8px;
  }
  .main-timeline .description {
    font-size: 16px;
    margin: 0;
    min-height: 7vh;
  }
  .main-timeline .timeline:nth-child(even) {
    float: right;
  }
  .main-timeline .timeline:nth-child(even):before {
    right: auto;
    left: 0;
  }
  .main-timeline .timeline:nth-child(even) .timeline-content {
    padding: 15px 10px 15px 80px;
  }
  .main-timeline .timeline:nth-child(even) .timeline-content:before {
    right: auto;
    left: 51px;
  }
  .main-timeline .timeline:nth-child(even) .timeline-year {
    right: auto;
    // left: -15px; original
    left: -24px;
  }
  .main-timeline .timeline:nth-child(4n + 2) .timeline-content:before {
    background: $cstm-col4;
  }
  .main-timeline .timeline:nth-child(4n + 3) .timeline-content:before {
    background: $cstm-col5;
  }
  .main-timeline .timeline:nth-child(4n + 4) .timeline-content:before {
    background: $cstm-col6;
  }
  @media screen and (max-width: 767px) {
    .main-timeline .timeline {
      width: 100%;
    }
  }
</style>
