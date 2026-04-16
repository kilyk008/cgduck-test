class SimpleInquiryModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .modal { display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4); }
                .modal-content { background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%; max-width: 500px; border-radius: 10px; position: relative; }
                .close-button { color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer; }
                h2 { text-align: center; }
                form div { margin-bottom: 1rem; }
                label { display: block; margin-bottom: 0.5rem; }
                input, textarea { width: 100%; padding: 0.8rem; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }
                button { width: 100%; padding: 1rem; background-color: #007BFF; color: white; border: none; border-radius: 5px; font-size: 1.2rem; cursor: pointer; }
            </style>
            <div class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2>간편문의</h2>
                    <form>
                        <div><label for="name">이름</label><input type="text" id="name"></div>
                        <div><label for="phone">전화번호</label><input type="tel" id="phone"></div>
                        <div><label for="region">지역 (시/동)</label><input type="text" id="region"></div>
                        <div><label for="inquiry">문의 내용</label><textarea id="inquiry" rows="4"></textarea></div>
                        <button type="submit">문의하기</button>
                    </form>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.modal = this.shadowRoot.querySelector('.modal');
        this.shadowRoot.querySelector('.close-button').addEventListener('click', () => this.hide());
        this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission
            console.log('간편문의 제출됨');
            this.hide();
        });
    }

    show() {
        this.modal.style.display = 'block';
    }

    hide() {
        this.modal.style.display = 'none';
    }
}

class QuoteRequestModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .modal { display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4); }
                .modal-content { background-color: #fefefe; margin: 5% auto; padding: 20px; border: 1px solid #888; width: 90%; max-width: 700px; border-radius: 10px; position: relative; }
                .close-button { color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer; }
                 h2 { text-align: center; }
                form { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
                .full-width { grid-column: 1 / -1; }
                label { display: block; margin-bottom: 0.5rem; }
                input, select, textarea { width: 100%; padding: 0.8rem; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }
                button { width: 100%; padding: 1rem; background-color: #007BFF; color: white; border: none; border-radius: 5px; font-size: 1.2rem; cursor: pointer; grid-column: 1 / -1; }
            </style>
            <div class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2>무료 견적 받기</h2>
                    <form>
                        <div><label for="name">이름</label><input type="text" id="name"></div>
                        <div><label for="contact">연락처</label><input type="tel" id="contact"></div>
                        <div><label for="building-type">건물 유형</label><input type="text" id="building-type"></div>
                        <div><label for="address">상세주소</label><input type="text" id="address"></div>
                        <div><label for="area">평수</label><input type="number" id="area"></div>
                        <div><label for="floor">층수</label><input type="number" id="floor"></div>
                        <div><label for="elevator">엘리베이터</label><select id="elevator"><option value="yes">유</option><option value="no">무</option></select></div>
                        <div><label for="photos">현장사진/타 업체 견적</label><input type="file" id="photos" multiple></div>
                        <div class="full-width"><label for="date">공사 예정일</label><input type="date" id="date"></div>
                        <div class="full-width"><label for="requests">요청사항</label><textarea id="requests" rows="4"></textarea></div>
                        <button type="submit">견적 요청하기</button>
                    </form>
                </div>
            </div>
        `;
    }

     connectedCallback() {
        this.modal = this.shadowRoot.querySelector('.modal');
        this.shadowRoot.querySelector('.close-button').addEventListener('click', () => this.hide());
        this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission
            console.log('견적 요청 제출됨');
            this.hide();
        });
    }

    show() {
        this.modal.style.display = 'block';
    }

    hide() {
        this.modal.style.display = 'none';
    }
}

customElements.define('simple-inquiry-modal', SimpleInquiryModal);
customElements.define('quote-request-modal', QuoteRequestModal);

document.addEventListener('DOMContentLoaded', () => {
    const simpleInquiryModal = document.querySelector('simple-inquiry-modal');
    const quoteRequestModal = document.querySelector('quote-request-modal');

    document.getElementById('open-simple-inquiry').addEventListener('click', () => simpleInquiryModal.show());
    document.getElementById('open-quote-modal').addEventListener('click', () => quoteRequestModal.show());
    document.getElementById('open-quote-modal-nav').addEventListener('click', (e) => {
      e.preventDefault();
      quoteRequestModal.show()
    });

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        if (anchor.id === 'open-quote-modal-nav') return;
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement){
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
