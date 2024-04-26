export default function MyButton({ text }: { text: string }) {
  return (
    <button style={{ backgroundColor: "blue", color: "white"}}>{ text }</button>
  )
}