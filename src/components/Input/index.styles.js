import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return {
        inputCom: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            position: 'relative',
            marginTop:20
        },
        label: {
            display: 'flex',
            fontSize: 12,
            color: '#000',
            fontWeight: 300,
            marginTop: 18,
            position: 'absolute',
            right: 8,
            top:-27,
            padding: 1,
            zIndex: 50,
            paddingRight: 6,
            paddingLeft: 6
        },

    }

})
export default useStyles