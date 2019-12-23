import React, { Component } from 'react';
import { List, Icon } from 'antd';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          "0": "庆余年",
          "1": "46",
          "2": "https://hong.tianzhen-zuida.com/share/c00f93e02693afe23176023140a46225",
          "name": "庆余年",
          "episode": "46",
          "url": "https://hong.tianzhen-zuida.com/share/c00f93e02693afe23176023140a46225"
        },
        {
          "0": "庆余年",
          "1": "45",
          "2": "https://hong.tianzhen-zuida.com/share/a6424579bdf800415424996ec6d18dac",
          "name": "庆余年",
          "episode": "45",
          "url": "https://hong.tianzhen-zuida.com/share/a6424579bdf800415424996ec6d18dac"
        },
        {
          "0": "庆余年",
          "1": "44",
          "2": "https://meng.wuyou-zuida.com/share/5990653da56b4075bff360efcc52383f",
          "name": "庆余年",
          "episode": "44",
          "url": "https://meng.wuyou-zuida.com/share/5990653da56b4075bff360efcc52383f"
        },
        {
          "0": "庆余年",
          "1": "43",
          "2": "https://meng.wuyou-zuida.com/share/33a4315c94f5a3ff05b17129a296a733",
          "name": "庆余年",
          "episode": "43",
          "url": "https://meng.wuyou-zuida.com/share/33a4315c94f5a3ff05b17129a296a733"
        },
        {
          "0": "庆余年",
          "1": "42",
          "2": "https://meng.wuyou-zuida.com/share/92e9ee85b2a0843ab8dfe06a2e51adee",
          "name": "庆余年",
          "episode": "42",
          "url": "https://meng.wuyou-zuida.com/share/92e9ee85b2a0843ab8dfe06a2e51adee"
        },
        {
          "0": "庆余年",
          "1": "41",
          "2": "https://meng.wuyou-zuida.com/share/7a830b9099d2e43368b1f70412ca5cd6",
          "name": "庆余年",
          "episode": "41",
          "url": "https://meng.wuyou-zuida.com/share/7a830b9099d2e43368b1f70412ca5cd6"
        },
        {
          "0": "庆余年",
          "1": "40",
          "2": "https://you-ku.qingyu-zuida.com/share/3d863b367aa379f71c7afc0c9cdca41d",
          "name": "庆余年",
          "episode": "40",
          "url": "https://you-ku.qingyu-zuida.com/share/3d863b367aa379f71c7afc0c9cdca41d"
        },
        {
          "0": "庆余年",
          "1": "39",
          "2": "https://hong.tianzhen-zuida.com/share/548c579b82d70ac53cf18c68c0f505e3",
          "name": "庆余年",
          "episode": "39",
          "url": "https://hong.tianzhen-zuida.com/share/548c579b82d70ac53cf18c68c0f505e3"
        },
        {
          "0": "庆余年",
          "1": "38",
          "2": "https://hong.tianzhen-zuida.com/share/25397b4aa0a8d579b7f41bb0a4d5e1e3",
          "name": "庆余年",
          "episode": "38",
          "url": "https://hong.tianzhen-zuida.com/share/25397b4aa0a8d579b7f41bb0a4d5e1e3"
        },
        {
          "0": "庆余年",
          "1": "37",
          "2": "https://hong.tianzhen-zuida.com/share/2a58f49626150f82e4d7ba4d4c923e09",
          "name": "庆余年",
          "episode": "37",
          "url": "https://hong.tianzhen-zuida.com/share/2a58f49626150f82e4d7ba4d4c923e09"
        },
        {
          "0": "庆余年",
          "1": "36",
          "2": "https://hong.tianzhen-zuida.com/share/546c7db00a7ea7f4ee164855c22b1efe",
          "name": "庆余年",
          "episode": "36",
          "url": "https://hong.tianzhen-zuida.com/share/546c7db00a7ea7f4ee164855c22b1efe"
        },
        {
          "0": "庆余年",
          "1": "35",
          "2": "https://you-ku.qingyu-zuida.com/share/7d2b92b6726c241134dae6cd3fb8c182",
          "name": "庆余年",
          "episode": "35",
          "url": "https://you-ku.qingyu-zuida.com/share/7d2b92b6726c241134dae6cd3fb8c182"
        },
        {
          "0": "庆余年",
          "1": "34",
          "2": "https://you-ku.qingyu-zuida.com/share/deb54ffb41e085fd7f69a75b6359c989",
          "name": "庆余年",
          "episode": "34",
          "url": "https://you-ku.qingyu-zuida.com/share/deb54ffb41e085fd7f69a75b6359c989"
        },
        {
          "0": "庆余年",
          "1": "33",
          "2": "https://mei.huazuida.com/share/c9dbd0b8b755799ec462e24e2eb66bac",
          "name": "庆余年",
          "episode": "33",
          "url": "https://mei.huazuida.com/share/c9dbd0b8b755799ec462e24e2eb66bac"
        },
        {
          "0": "庆余年",
          "1": "32",
          "2": "https://mei.huazuida.com/share/73b31da2c3e19a4920865d0e8ae1c82a",
          "name": "庆余年",
          "episode": "32",
          "url": "https://mei.huazuida.com/share/73b31da2c3e19a4920865d0e8ae1c82a"
        },
        {
          "0": "庆余年",
          "1": "31",
          "2": "https://mei.huazuida.com/share/6ed459ea169d96c38c7167d4cf471013",
          "name": "庆余年",
          "episode": "31",
          "url": "https://mei.huazuida.com/share/6ed459ea169d96c38c7167d4cf471013"
        },
        {
          "0": "庆余年",
          "1": "30",
          "2": "https://mei.huazuida.com/share/25b55400e4fef098a35e25ba199b47b5",
          "name": "庆余年",
          "episode": "30",
          "url": "https://mei.huazuida.com/share/25b55400e4fef098a35e25ba199b47b5"
        },
        {
          "0": "庆余年",
          "1": "29",
          "2": "https://mei.huazuida.com/share/ae00729a0676734cf9ce48a9f859b7a7",
          "name": "庆余年",
          "episode": "29",
          "url": "https://mei.huazuida.com/share/ae00729a0676734cf9ce48a9f859b7a7"
        },
        {
          "0": "庆余年",
          "1": "28",
          "2": "https://mei.huazuida.com/share/3116e20932c152ecd0daac6d655352cc",
          "name": "庆余年",
          "episode": "28",
          "url": "https://mei.huazuida.com/share/3116e20932c152ecd0daac6d655352cc"
        },
        {
          "0": "庆余年",
          "1": "27",
          "2": "https://hong.tianzhen-zuida.com/share/a6bf0f2a7ae9328478049b705b15261b",
          "name": "庆余年",
          "episode": "27",
          "url": "https://hong.tianzhen-zuida.com/share/a6bf0f2a7ae9328478049b705b15261b"
        },
        {
          "0": "庆余年",
          "1": "26",
          "2": "https://hong.tianzhen-zuida.com/share/1c150c70579a81b2b641b4a98de07cf6",
          "name": "庆余年",
          "episode": "26",
          "url": "https://hong.tianzhen-zuida.com/share/1c150c70579a81b2b641b4a98de07cf6"
        },
        {
          "0": "庆余年",
          "1": "25",
          "2": "https://mei.huazuida.com/share/7efcd8c929bcbfd5b016c00a711f5759",
          "name": "庆余年",
          "episode": "25",
          "url": "https://mei.huazuida.com/share/7efcd8c929bcbfd5b016c00a711f5759"
        },
        {
          "0": "庆余年",
          "1": "24",
          "2": "https://mei.huazuida.com/share/be6ea238d9be0fc60080a6f8a8188817",
          "name": "庆余年",
          "episode": "24",
          "url": "https://mei.huazuida.com/share/be6ea238d9be0fc60080a6f8a8188817"
        },
        {
          "0": "庆余年",
          "1": "23",
          "2": "https://mei.huazuida.com/share/8534faf0b0b4a15ae79f1434ddcb94f1",
          "name": "庆余年",
          "episode": "23",
          "url": "https://mei.huazuida.com/share/8534faf0b0b4a15ae79f1434ddcb94f1"
        },
        {
          "0": "庆余年",
          "1": "22",
          "2": "https://hong.tianzhen-zuida.com/share/f5df16d9bd60b0894064b5777139de79",
          "name": "庆余年",
          "episode": "22",
          "url": "https://hong.tianzhen-zuida.com/share/f5df16d9bd60b0894064b5777139de79"
        },
        {
          "0": "庆余年",
          "1": "21",
          "2": "https://hong.tianzhen-zuida.com/share/fce40f257a6c2f9bcbd0b1f562a8e276",
          "name": "庆余年",
          "episode": "21",
          "url": "https://hong.tianzhen-zuida.com/share/fce40f257a6c2f9bcbd0b1f562a8e276"
        },
        {
          "0": "庆余年",
          "1": "20",
          "2": "https://hong.tianzhen-zuida.com/share/948750a01b42decb760277c873238254",
          "name": "庆余年",
          "episode": "20",
          "url": "https://hong.tianzhen-zuida.com/share/948750a01b42decb760277c873238254"
        },
        {
          "0": "庆余年",
          "1": "19",
          "2": "https://hong.tianzhen-zuida.com/share/adf880d5c8986bd0deb6423c92c9d948",
          "name": "庆余年",
          "episode": "19",
          "url": "https://hong.tianzhen-zuida.com/share/adf880d5c8986bd0deb6423c92c9d948"
        },
        {
          "0": "庆余年",
          "1": "18",
          "2": "https://hong.tianzhen-zuida.com/share/0b5f2caf4c5de1e3a8e68f505ae6899b",
          "name": "庆余年",
          "episode": "18",
          "url": "https://hong.tianzhen-zuida.com/share/0b5f2caf4c5de1e3a8e68f505ae6899b"
        },
        {
          "0": "庆余年",
          "1": "17",
          "2": "https://meng.wuyou-zuida.com/share/025d5dcf6672b592a16f4533d4249bd8",
          "name": "庆余年",
          "episode": "17",
          "url": "https://meng.wuyou-zuida.com/share/025d5dcf6672b592a16f4533d4249bd8"
        },
        {
          "0": "庆余年",
          "1": "16",
          "2": "https://meng.wuyou-zuida.com/share/0ba7bc92fcd57e337ebb9e74308c811f",
          "name": "庆余年",
          "episode": "16",
          "url": "https://meng.wuyou-zuida.com/share/0ba7bc92fcd57e337ebb9e74308c811f"
        },
        {
          "0": "庆余年",
          "1": "15",
          "2": "https://hong.tianzhen-zuida.com/share/e0a4794fc273e7d59334e5f4fba95f3b",
          "name": "庆余年",
          "episode": "15",
          "url": "https://hong.tianzhen-zuida.com/share/e0a4794fc273e7d59334e5f4fba95f3b"
        },
        {
          "0": "庆余年",
          "1": "14",
          "2": "https://hong.tianzhen-zuida.com/share/971bbe989ad132e834b0ccb3f32e92ee",
          "name": "庆余年",
          "episode": "14",
          "url": "https://hong.tianzhen-zuida.com/share/971bbe989ad132e834b0ccb3f32e92ee"
        },
        {
          "0": "庆余年",
          "1": "13",
          "2": "https://mei.huazuida.com/share/49b8ba8f9e5b7b260a306c25393a4181",
          "name": "庆余年",
          "episode": "13",
          "url": "https://mei.huazuida.com/share/49b8ba8f9e5b7b260a306c25393a4181"
        },
        {
          "0": "庆余年",
          "1": "12",
          "2": "https://mei.huazuida.com/share/6563f4cdc1f2ef1ad710ad6772ea022b",
          "name": "庆余年",
          "episode": "12",
          "url": "https://mei.huazuida.com/share/6563f4cdc1f2ef1ad710ad6772ea022b"
        },
        {
          "0": "庆余年",
          "1": "11",
          "2": "https://meng.wuyou-zuida.com/share/693ba0757b77ceb996e90c00431d9ebc",
          "name": "庆余年",
          "episode": "11",
          "url": "https://meng.wuyou-zuida.com/share/693ba0757b77ceb996e90c00431d9ebc"
        },
        {
          "0": "庆余年",
          "1": "10",
          "2": "https://meng.wuyou-zuida.com/share/c56491fecc8c073d6c811b69a3ab6539",
          "name": "庆余年",
          "episode": "10",
          "url": "https://meng.wuyou-zuida.com/share/c56491fecc8c073d6c811b69a3ab6539"
        },
        {
          "0": "庆余年",
          "1": "9",
          "2": "https://meng.wuyou-zuida.com/share/7d7733c8d01b7352aab3990d99d89d8e",
          "name": "庆余年",
          "episode": "9",
          "url": "https://meng.wuyou-zuida.com/share/7d7733c8d01b7352aab3990d99d89d8e"
        },
        {
          "0": "庆余年",
          "1": "8",
          "2": "https://hong.tianzhen-zuida.com/share/b156769842d5235767f769b5c8617399",
          "name": "庆余年",
          "episode": "8",
          "url": "https://hong.tianzhen-zuida.com/share/b156769842d5235767f769b5c8617399"
        },
        {
          "0": "庆余年",
          "1": "7",
          "2": "https://hong.tianzhen-zuida.com/share/d4aac89cf9a63cc7ee5328725120289b",
          "name": "庆余年",
          "episode": "7",
          "url": "https://hong.tianzhen-zuida.com/share/d4aac89cf9a63cc7ee5328725120289b"
        },
        {
          "0": "庆余年",
          "1": "6",
          "2": "https://hong.tianzhen-zuida.com/share/ea9b6cd30546ce1e20bd2f6df7e82e64",
          "name": "庆余年",
          "episode": "6",
          "url": "https://hong.tianzhen-zuida.com/share/ea9b6cd30546ce1e20bd2f6df7e82e64"
        },
        {
          "0": "庆余年",
          "1": "5",
          "2": "https://hong.tianzhen-zuida.com/share/1ac4dbd83735534bcebc28c845dafccd",
          "name": "庆余年",
          "episode": "5",
          "url": "https://hong.tianzhen-zuida.com/share/1ac4dbd83735534bcebc28c845dafccd"
        },
        {
          "0": "庆余年",
          "1": "4",
          "2": "https://meng.wuyou-zuida.com/share/207b82052155f633aad84054f0821bee",
          "name": "庆余年",
          "episode": "4",
          "url": "https://meng.wuyou-zuida.com/share/207b82052155f633aad84054f0821bee"
        },
        {
          "0": "庆余年",
          "1": "3",
          "2": "https://meng.wuyou-zuida.com/share/9b8d3bb399e0c15a8bf245a0ac1b1ca6",
          "name": "庆余年",
          "episode": "3",
          "url": "https://meng.wuyou-zuida.com/share/9b8d3bb399e0c15a8bf245a0ac1b1ca6"
        },
        {
          "0": "庆余年",
          "1": "2",
          "2": "https://meng.wuyou-zuida.com/share/45e386443077da53fcfe55cc64300f01",
          "name": "庆余年",
          "episode": "2",
          "url": "https://meng.wuyou-zuida.com/share/45e386443077da53fcfe55cc64300f01"
        },
        {
          "0": "庆余年",
          "1": "1",
          "2": "https://meng.wuyou-zuida.com/share/f4b3da8be9b354457f288b15bd37410a",
          "name": "庆余年",
          "episode": "1",
          "url": "https://meng.wuyou-zuida.com/share/f4b3da8be9b354457f288b15bd37410a"
        }
      ]
    }
  }
  render() {
    return (
      <div className='app'>
        <List
          size="large"
          bordered
          dataSource={this.state.list.reverse()}
          renderItem={item => <List.Item><Icon type="heart" theme="twoTone" twoToneColor="#1DA57A" /><a href={item.url}>{item.name + item.episode}</a></List.Item>}
        />
      </div>
    );
  }
}

export default App;