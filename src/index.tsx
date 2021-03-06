import classnames from 'classnames'
import * as React from 'react'
import { useEffect, useState } from 'react'

import style from './index.stylus'

type IProps = {
    total: number
    pageSize: number
    onChange(page: number): void
    visible?: boolean,
    className?: string,
    text?: (page: number, allPage: number) => string
}

export default function (props: IProps): React.ReactElement | null {
    const [page, setPage] = useState(1)
    const allPage = Math.ceil(props.total / props.pageSize)
    const [prevStatus, setPrevStatus] = useState(true)
    const [nextStatus, setNextStatus] = useState(true)

    useEffect(() => {
        setNextStatus(allPage < 2)
    }, [allPage])

    useEffect(() => {
        props.onChange(page)
    }, [page])

    return props.visible !== false ? (
        <div className={classnames(style.pagination, props.className || 'reactPagination')}>
            <div className={style.box}>
                <div
                    className={classnames(style.prev, 'prev', { prevDisable: prevStatus })}
                    onClick={() => {
                        if (prevStatus) return
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
                <div className={classnames(style.text, 'text')}>
                    {props.text ? props.text(page, allPage) : `Page ${page} of ${allPage}`}
                </div>
                <div
                    className={classnames(style.next, 'next', { nextDisable: nextStatus })}
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
