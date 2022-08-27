import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
} from "@syncfusion/ej2-react-grids";

const SyncfusionTable = ({ UsersData, UsersGrid }) => {
	return (
		<GridComponent dataSource={UsersData} width="auto">
			<ColumnsDirective>
				{UsersGrid.map((item, index) => (
					<ColumnDirective key={index} {...item} />
				))}
			</ColumnsDirective>
		</GridComponent>
	);
};

export default SyncfusionTable;
