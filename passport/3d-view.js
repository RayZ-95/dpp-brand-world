document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.querySelector('model-viewer');
    const viewButtons = document.querySelectorAll('.view-btn');

    // 预设视角
    const viewPositions = {
        front: '0deg 90deg 2.5m',
        back: '180deg 90deg 2.5m',
        left: '-90deg 90deg 2.5m',
        right: '90deg 90deg 2.5m'
    };

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.dataset.view;
            if (viewPositions[view]) {
                modelViewer.cameraOrbit = viewPositions[view];
                
                // 更新按钮状态
                viewButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            }
        });
    });

    // 加载完成后的处理
    modelViewer.addEventListener('load', () => {
        document.querySelector('.view-controls').style.display = 'flex';
    });

    // 错误处理
    modelViewer.addEventListener('error', () => {
        const container = document.querySelector('.model-viewer-container');
        container.innerHTML = `
            <div class="error-message">
                <p>The 3D model could not load</p>
                <p>Check the connection or refresh the page</p>
            </div>
        `;
    });
}); 