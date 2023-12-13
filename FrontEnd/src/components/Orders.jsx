import { Table, Typography, Modal } from "antd";
import { useState } from "react";
const { Text } = Typography;

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: "Order",
      key: "name",
      render: (item) => {
        return (
          <Text
            onClick={showModal}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {item.order}
          </Text>
        );
      },
    },
    {
      title: "Date",
      key: "age",
      render: (item) => {
        return (
          <Text style={{ color: "blue", cursor: "pointer" }}>{item.date}</Text>
        );
      },
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "address",
    },
    {
      title: "Customer",
      key: "tags",
      dataIndex: "customer",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];
  const data = [
    {
      key: "1",
      order: "#0000",
      date: new Date().getFullYear(),
      product: "Nike Show - White",
      customer: "Abid Hassan",
      status: "Done",
      action: "Cancelled",
    },
    {
      key: "2",
      order: "#0000",
      date: new Date().getFullYear(),
      product: "Nike Show - White",
      customer: "Abid Hassan",
      status: "Done",
      action: "Cancelled",
    },
    {
      key: "3",
      order: "#0000",
      date: new Date().getFullYear(),
      product: "Nike Show - White",
      customer: "Abid Hassan",
      status: "Done",
      action: "Cancelled",
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="orders">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          color: "black",
          padding: "2em",
          fontSize: ".65em",
          borderRadius: "1em 1em 0 0 ",
        }}
      >
        <h2 style={{ fontSize: "1em" }}>Recent Orders</h2>
        <h2>View All</h2>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          adipisci ducimus eum nesciunt consectetur sed esse ab, quis, delectus,
          consequuntur debitis iste reprehenderit! Minima a, corrupti officia
          eaque alias, voluptatem doloremque vel vero quibusdam laboriosam
          tempora sint omnis blanditiis odio, molestias non at tenetur saepe.
          Aliquam at officia libero quos similique sint asperiores, temporibus
          omnis praesentium earum tempora, blanditiis voluptatem consectetur
          odit fuga soluta culpa quis quam eum eaque! Sapiente accusantium ipsa
          architecto dolorem quisquam pariatur blanditiis ducimus impedit
          excepturi perferendis suscipit, numquam ex, qui praesentium voluptas.
          Eveniet expedita illo veritatis nulla! Magnam ducimus, ut quisquam
          rerum ratione quod libero nam nihil ad blanditiis qui pariatur dolor
          at architecto necessitatibus aut enim eveniet molestias ipsam, illo
          beatae iusto consequatur facere? Ea repellat dolor et qui natus nihil
          est quisquam eos omnis modi officiis, iure culpa velit animi quibusdam
          ipsum, voluptas harum inventore sed! Consectetur repellat explicabo
          voluptatum, aperiam facilis quos ab tempora veritatis, ullam maxime,
          similique non vitae velit laboriosam molestias quia optio cupiditate
          delectus incidunt numquam totam sequi. Tempora et laudantium nemo
          dolore praesentium unde laborum architecto rem cupiditate rerum itaque
          blanditiis iure hic enim expedita, a fugit soluta in assumenda non!
          Nobis vel voluptate consequuntur praesentium ut minima.
        </Modal>
      </div>
    </div>
  );
};

export default Orders;
