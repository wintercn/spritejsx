
const {Group, Path, Scene, Sprite} = spritejs


spritejs.createElement = function createElement(type, attrs, content){
    var sprite = new type(typeof content == 'string'? content : undefined );
    if(attrs !== null)
        sprite.attr(attrs);

    if(typeof content == 'object' && sprite.append) {
      if(content instanceof Array) {
        for(var e of content)
          sprite.append(e);
      } else {
        sprite.append(content);
      }
    }
    return sprite;
}




const scene = new Scene('#demo-quickStart', {
  viewport: ['auto', 'auto'],
  resolution: [800, 800],
})

const layer = scene.layer();



const robot = <Sprite anchor={[0, 0]} pos={[0, 0]} >https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png</Sprite>


const group = 
  <Group
    size={[300, 300]}
    pos={[400, 400]}
    anchor={[0.5, 0.5]}>
    {
      [0, 1, 2, 3, 4, 5].map( i => <Path path={{
          d: 'M0 0L 50 0A50 50 0 0 1 43.3 25z',
          transform: {scale: 3, rotate: -15},
          trim: true,
        }} 
        pos={[150, 150]}
        anchor={[0, 0.5]}
        strokeColor='red'
        fillColor={`rgb(${i * 139 % 255}, 0, 0)`}
        rotate = {i * 60}></Path> )
    }
    
  </Group>

layer.append(group);



group.animate([
  {rotate: 0},
  {rotate: 360},
], {
  duration: 3000,
  iterations: Infinity,
})
