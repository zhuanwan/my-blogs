import styles from './test1.module.less'
function Component() {
  console.log(333, styles)
  return (
    <div className={styles.box}>
      <h2>在测试</h2>
      <div className={styles['canvas-box']}>
        <canvas id="canvas"></canvas>
      </div>

    </div>
  )
}

export default Component