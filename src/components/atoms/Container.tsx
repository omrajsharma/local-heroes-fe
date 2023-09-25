interface Props {
    children: JSX.Element | String,
    maxWidth?: "sm" | "md" | "lg" | "xl"
}

const Container = ({children, maxWidth}: Props) => {
  return (
    <div style={{
        maxWidth: maxWidth == "sm" ? "600px" :
                    maxWidth == "md" ? "900px" :
                    maxWidth == "lg" ? "1200px" :
                    maxWidth == "xl" ? "1500px" :
                    "1200px",
        margin: "auto",
        padding: "10px"
    }}>
      {children}
    </div>
  )
}

export default Container
