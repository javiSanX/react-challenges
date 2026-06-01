import { Image } from "./Image";
import "./styles.css";

const images = [
   "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1521298355169-e5c635852ebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1524125833033-bc59e523d3e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1478759964935-dd04a42105a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1420537659459-1e231ca42aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1549317689-39fc2eded51f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1501243249600-0560abe6e5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1525087752987-a11d2cb604bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1516640997890-5e4c83df8419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

const Demo = () => {
   return (
      <div className=" overflow-scroll text-left border-solid border border-neutral-800 text-white bg-black rounded-xl text-xs p-8 min-h-[400px]">
         <header className="mb-8 text-center">
            <h2 className="text-4xl font-bold mb-4">useNearScreen </h2>
         </header>
         {images.map((image) => (
            <Image key={image} src={image} />
         ))}
      </div>
   );
};

export default Demo;
