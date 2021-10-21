function Alert () {
    ['primary'].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ));
    //    sadfasd
}
export default Alert;