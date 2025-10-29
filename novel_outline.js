// novel_outline.js

// 示例数据
let outlines = [
    { title: '第一章', content: '主角穿越异世界，获得神秘力量。' },
    { title: '第二章', content: '主角结识伙伴，共同踏上旅途。' },
    { title: '第三章', content: '遭遇强敌，险象环生。' },
    // ... 可扩展更多章节
];
let page = 1;
const pageSize = 10;

function renderOutlineList() {
    const list = document.getElementById('outlineList');
    list.innerHTML = '';
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    outlines.slice(start, end).forEach((item, idx) => {
        const li = document.createElement('li');
        li.className = 'outline-item';
        li.innerHTML = `
            <span class="outline-title">${item.title}：</span>
            <span class="outline-content">${item.content}</span>
            <button class="edit-btn" onclick="editOutline(${start + idx})">编辑</button>
        `;
        list.appendChild(li);
    });
    document.getElementById('pageNum').textContent = page;
    document.getElementById('pageNumBottom').textContent = page;
}

function prevPage() {
    if (page > 1) {
        page--;
        renderOutlineList();
    }
}

function nextPage() {
    if (page * pageSize < outlines.length) {
        page++;
        renderOutlineList();
    }
}

function editOutline(idx) {
    const newContent = prompt('编辑细纲内容：', outlines[idx].content);
    if (newContent !== null) {
        outlines[idx].content = newContent;
        renderOutlineList();
    }
}

function saveOutline() {
    alert('细纲已保存！（示例功能）');
    // 实际保存逻辑可用AJAX等方式实现
}

function generateOutline() {
    outlines = [];
    for (let i = 1; i <= 20; i++) {
        outlines.push({
            title: `第${i}章`,
            content: `第${i}章的细纲内容。`
        });
    }
    page = 1;
    renderOutlineList();
}

// 初始化
window.onload = renderOutlineList;
