"use client";

export default function DecorativeShapes({ variant = 1 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {variant === 1 && (
        <>
          <svg className="absolute top-[10%] left-[-5%] w-[30rem] h-[30rem] text-luxury-ochre opacity-5 animate-float" style={{ animationDelay: '0s' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M42.7,-73.4C55.9,-67.8,67.6,-56.3,74.5,-42.4C81.4,-28.5,83.5,-12.3,81.4,3.2C79.3,18.7,73,33.5,63.1,45.3C53.2,57.1,39.7,66,24.8,71.2C9.9,76.4,-6.5,77.9,-21.8,74.2C-37.1,70.5,-51.4,61.6,-61.8,49.2C-72.2,36.8,-78.7,21.1,-81.1,4.7C-83.5,-11.7,-81.8,-28.8,-73.1,-42.2C-64.4,-55.6,-48.8,-65.3,-33.6,-70.5C-18.4,-75.7,-3.6,-76.4,11,-73.3C25.6,-70.2,35.2,-79,42.7,-73.4Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-[5%] right-[-10%] w-[40rem] h-[40rem] text-luxury-gold opacity-5 animate-pulse-glow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M47.7,-68.8C61.3,-58.5,71.4,-44,77.3,-27.8C83.2,-11.6,84.9,6.3,79.5,21.5C74.1,36.7,61.6,49.2,46.9,58.7C32.2,68.2,16.1,74.7,-1.2,76.4C-18.5,78.1,-37,75.1,-50.7,65.3C-64.4,55.5,-73.3,38.9,-78.2,21.1C-83.1,3.3,-84,-15.7,-76.6,-31.4C-69.2,-47.1,-53.5,-59.5,-38.3,-68.9C-23.1,-78.3,-8.4,-84.7,6.4,-94C21.2,-103.3,34.1,-79.1,47.7,-68.8Z" transform="translate(100 100)" />
          </svg>
        </>
      )}

      {variant === 2 && (
        <>
          <svg className="absolute top-[20%] right-[5%] w-[25rem] h-[25rem] text-luxury-gold opacity-5 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M51.9,-65.7C65.5,-54.6,73.6,-36.8,75.9,-18.8C78.2,-0.8,74.7,17.4,65.5,32.7C56.3,48,41.4,60.4,24.1,68.3C6.8,76.2,-12.9,79.6,-29.8,73.8C-46.7,68,-60.8,53,-69.3,35.9C-77.8,18.8,-80.7,-0.4,-75.7,-17.1C-70.7,-33.8,-57.8,-48,-42.6,-59.4C-27.4,-70.8,-9.9,-79.4,4.7,-85.1C19.3,-90.8,38.3,-76.8,51.9,-65.7Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-[10%] left-[-5%] w-[35rem] h-[35rem] text-luxury-ochre opacity-5 animate-pulse-glow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M36,-58.5C49.3,-50.2,64.6,-44,71.2,-32.1C77.8,-20.2,75.7,-2.6,71.2,13.7C66.7,30,59.8,45,48.1,55.3C36.4,65.6,19.9,71.2,3.3,67C-13.3,62.8,-29.8,48.8,-43.5,36.5C-57.2,24.2,-68.1,13.6,-71.4,1.1C-74.7,-11.4,-70.4,-25.8,-61,-37.8C-51.6,-49.8,-37.1,-59.4,-23.4,-66C-9.7,-72.6,3.2,-76.2,14.6,-70.9C26,-65.6,22.7,-66.8,36,-58.5Z" transform="translate(100 100)" />
          </svg>
        </>
      )}

      {variant === 3 && (
        <>
          <svg className="absolute top-[30%] left-[10%] w-[20rem] h-[20rem] text-luxury-ochre opacity-10 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M37.9,-61.1C51.6,-53.4,66.9,-46.9,73.4,-35.1C79.9,-23.3,77.6,-6.2,71.2,7.7C64.8,21.6,54.3,32.3,43.3,42.5C32.3,52.7,20.8,62.4,5.9,54.5C-9,46.6,-27.3,21.1,-37.6,3.2C-47.9,-14.7,-50.2,-25,-44.6,-34.5C-39,-44,-25.5,-52.7,-11.9,-58C1.7,-63.3,24.2,-68.8,37.9,-61.1Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-[20%] right-[15%] w-[28rem] h-[28rem] text-luxury-gold opacity-5 animate-pulse-glow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M50.4,-65.8C63.2,-55.8,70.2,-37.9,74,-20.1C77.8,-2.3,78.4,15.4,70.5,29.8C62.6,44.2,46.2,55.3,29.1,62.8C12,70.3,-5.8,74.2,-23.1,70.4C-40.4,66.6,-57.2,55.1,-65.7,40.1C-74.2,25.1,-74.4,6.6,-68.5,-9.5C-62.6,-25.6,-50.6,-39.3,-37.1,-49.6C-23.6,-59.9,-8.6,-66.8,7.3,-75.7C23.2,-84.6,37.6,-75.8,50.4,-65.8Z" transform="translate(100 100)" />
          </svg>
        </>
      )}

      {variant === 4 && (
        <>
          <svg className="absolute top-[40%] right-[-5%] w-[35rem] h-[35rem] text-luxury-gold opacity-5 animate-float" style={{ animationDelay: '0.5s' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M42.1,-66.5C55.7,-59.2,68.8,-49,76.5,-35.1C84.2,-21.2,86.5,-3.6,82.4,12.2C78.3,28,67.8,42,54.7,52.3C41.6,62.6,25.9,69.2,9.7,70.7C-6.5,72.2,-23.2,68.6,-38.3,59.8C-53.4,51,-66.9,37,-72.5,20.8C-78.1,4.6,-75.8,-13.8,-68.1,-29.4C-60.4,-45,-47.3,-57.8,-32.8,-64.7C-18.3,-71.6,-2.4,-72.6,12.4,-69.1C27.2,-65.6,41.9,-57.6,42.1,-66.5Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-[5%] left-[5%] w-[25rem] h-[25rem] text-luxury-ochre opacity-10 animate-pulse-glow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M45.5,-63.3C57.6,-52.6,65.2,-37.2,69.5,-21.2C73.8,-5.2,74.8,11.4,69.1,25.8C63.4,40.2,51,52.4,36.5,60.9C22,69.4,5.4,74.2,-10.8,72.3C-27,70.4,-42.8,61.8,-55.1,49.2C-67.4,36.6,-76.2,20,-78,-2.2C-79.8,-24.4,-74.6,-47.8,-61,-59.2C-47.4,-70.6,-25.4,-70.1,-6.6,-62.1C12.2,-54.1,28,-38.7,45.5,-63.3Z" transform="translate(100 100)" />
          </svg>
        </>
      )}
    </div>
  );
}
