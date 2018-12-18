export default function loadGrassPalette(img)
{
    const canvas = document.createElement("canvas")
    const width = img.width;
    const height = img.height;
    canvas.width = width;
    canvas.height = height;
    canvas.className="offscreen";

    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0 , 0);

    const imageData = ctx.getImageData(0, 0, width, height);

    document.body.removeChild(canvas);


    const colors = new Array(width * height);

    const lineWidth = imageData.width * 4;
    const data = imageData.data;

    let index = 0;
    for(let y = 0; y < height; y++)
    {
        for(let x = 0; x < width; x++)
        {
            const off = y * lineWidth + x * 4;
            colors[index++] = "rgba(" + data[off] + ","  + data[off + 1] + ","  + data[off + 2] + ", 0.99)"
        }
    }

    return {
        width,
        height,
        colors
    };
}
