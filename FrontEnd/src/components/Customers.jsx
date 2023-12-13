import { Space, Table, Tag, Modal } from "antd";
import { useState } from "react";

const Customers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [target, setTarget] = useState("");

  const columns = [
    {
      title: "ID",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <a
          onClick={(e) => {
            setTarget(e.currentTarget.textContent);
            showModal();
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Name",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Country",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Orders",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Spent",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
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
    <div className="customers">
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
        <h2>Customers</h2>
        <h2>View All</h2>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <Modal
        title={target}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{target}</p>
      </Modal>
    </div>
  );
};
export default Customers;
