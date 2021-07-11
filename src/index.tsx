import classnames from 'classnames'
import * as React from 'react'
import { useEffect, useState } from 'react'

import style from './index.stylus'

type IProps = {
    total: number
    pageSize: number
    onChange(page: number): void
    visible?: boolean
}

export default function (props: IProps): React.ReactElement | null {
    const [page, setPage] = useState(1)
    const allPage = Math.ceil(props.total / props.pageSize)
    const [prevStatus, setPrevStatus] = useState(true)
    const [nextStatus, setNextStatus] = useState(allPage < 2)

    useEffect(() => {
        props.onChange(page)
    }, [page])

    return props.visible !== false ? (
        <div className={style.pagination}>
            <div className={style.box}>
                <div
                    className={classnames(style.prev, { prevDisable: prevStatus })}
                    onClick={() => {
                        if (page - 1 > 0) {
                            setPage(page - 1)
                            setPrevStatus(page - 1 === 1)
                            setNextStatus(false)
                        } else {
                            setPrevStatus(true)
                            setNextStatus(false)
                        }
                    }}
                />
                <div className={style.text}>
                    Page {page} of {allPage}
                </div>
                <div
                    className={classnames(style.next, { nextDisable: nextStatus })}
                    onClick={() => {
                        if (nextStatus) return
                        if (page + 1 <= allPage) {
                            setPage(page + 1)
                            setPrevStatus(false)
                            setNextStatus(page + 1 === allPage)
                        } else {
                            setPrevStatus(false)
                            setNextStatus(true)
                        }
                    }}
                />
            </div>
        </div>
    ) : null
}
