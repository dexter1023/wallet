import React from 'react'
import './index.css'

const TableHeader = () => {
    return (
        <thead className="table-header">
            <tr>
                <th>Nazwa</th>
                <th>Kwota</th>
                <th>Typ transakcji</th>
                <th>Kategoria</th>
                <th>Akcje</th>
            </tr>
        </thead>
    )
}

export default TableHeader