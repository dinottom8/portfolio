const svgs = [
    `
        <svg width="3.0156" height="5" viewBox="0 0 .79788 1.3229" class="svg0">
            <path transform="scale(.26458)" d="m0 0v5h3.0156l-0.015625-5zm1 1h1v3h-1z" fill="#fff"
                style="paint-order:stroke fill markers" />
        </svg>
    `,
    `
        <svg width="1" height="5" viewBox="0 0 .26458 1.3229" class="svg1">
            <g transform="translate(-100.73 -135.18)">
                <rect x="100.73" y="135.18" width=".26458" height="1.3229" fill="#fff"
                    style="paint-order:stroke fill markers" />
            </g>
        </svg>
    `
]

function printNumeros() {
    for (let index = 1; index <= 3; index++) {
        const h = Math.random() * window.innerHeight;
        const w = Math.random() * window.innerWidth;

        const r = Math.round(Math.random());

        $('#numbers' + index).append(
            '<div class="svg-container" style="left: ' + w + 'px; top: ' + h + 'px;"/>'
            + svgs[r] +
            '</div>'
        );
    }
}

for (let index = 0; index < 100; index++) {
    printNumeros();
}

setInterval(() => {
    $($)
}, 1024);