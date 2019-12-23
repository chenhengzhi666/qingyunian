const {
    override,
    addLessLoader,
    addWebpackAlias,
    fixBabelImports
} = require('customize-cra')
const path = require('path')
const paths = require('react-scripts/config/paths')

// 修改打包文件输入文件路径
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')

// 关闭打包sourcemap
process.env.GENERATE_SOURCEMAP = 'false'

const webpackConfig = () => (config, env) => {
    config.output.publicPath = './'    // 修改打包后输出文件引入路径
    return config
}

module.exports = {
    webpack: override(
        fixBabelImports('import', {         // 按需加载antd的组件  
            libraryName: 'antd',        
            libraryDirectory: 'es',       
            style: true
        }),
        addLessLoader({        
            javascriptEnabled: true,        
            modifyVars: { 
                '@primary-color': '#1DA57A' 
            }    
        }),    // 配置支持less
        addWebpackAlias({   // 配置别名
            '@': path.resolve(__dirname, 'src')
        }),
        webpackConfig()
    )
}