import React from 'react';

import product1Image from 'assets/img/products/product_640-1.jpg';
import product2Image from 'assets/img/products/product_640-2.jpg';
import product3Image from 'assets/img/products/product_640-3.jpg';
import product4Image from 'assets/img/products/product_640-4.jpg';
import product5Image from 'assets/img/products/product_640-5.jpg';
import product6Image from 'assets/img/products/product_640-6.jpg';

import user1Image from 'assets/img/users/100_1.jpg';
import user2Image from 'assets/img/users/100_2.jpg';
import user3Image from 'assets/img/users/100_3.jpg';
import user4Image from 'assets/img/users/100_4.jpg';
import user5Image from 'assets/img/users/100_5.jpg';
import user6Image from 'assets/img/users/100_6.jpg';
import user7Image from 'assets/img/users/100_7.jpg';
import user8Image from 'assets/img/users/100_8.jpg';
import user9Image from 'assets/img/users/100_9.jpg';
import user10Image from 'assets/img/users/100_10.jpg';
import user11Image from 'assets/img/users/100_11.jpg';
import user12Image from 'assets/img/users/100_12.jpg';
import user13Image from 'assets/img/users/100_13.jpg';
import user14Image from 'assets/img/users/100_14.jpg';

import Flower1 from 'assets/img/demo/flower1.jpeg'
import Flower2 from 'assets/img/demo/flower2.jpeg'
import Flower3 from 'assets/img/demo/flower3.jpeg'
import Flower4 from 'assets/img/demo/flower4.jpeg'
import Flower5 from 'assets/img/demo/flower5.jpeg'
import Flower6 from 'assets/img/demo/flower6.jpeg'
import Flower7 from 'assets/img/demo/flower7.jpeg'
import Flower8 from 'assets/img/demo/flower8.jpeg'

export const goodsDemoData = [
  {
    profile: user1Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user2Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user3Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user4Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user5Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user6Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user7Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user8Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user9Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user10Image,
    grade: 'Green',
    name: '이남남'
  },
  {
    profile: user11Image,
    grade: 'Green',
    name: '이남남'
  }
]

export const reviewDemoData = [
  {
    user: {
      profile: user1Image,
      name: '이남남'
    },
    date: '2023.01.15',
    images: [Flower1, Flower2, Flower3, Flower4, Flower5],
    comment: 'adfpoajpojoj dokfoajeiojin djeiji djsi diajioweiwruoq\n'
    + 'asdlfkkoeko wiufajcm ododo eow djdiajcijso\n'
    + 'co eiaksk cciaheic kdkkq ddkkkscbdhu.',
    reply: [{
      user: {
        profile: user2Image,
        name: '아미화'
      },
      date: '2023.01.15',
      comment: 'adfpoajpojoj dokfoajeiojin djeiji djsi diajioweiwruoq\n'
      + 'asdlfkkoeko wiufajcm ododo eow djdiajcijso\n'
      + 'co eiaksk cciaheic kdkkq ddkkkscbdhu.',
    }]

  },
  {
    user: {
      profile: user3Image,
      name: '김또또'
    },
    date: '2023.01.15',
    images: [Flower6, Flower7, Flower8],
    comment: 'adfpoajpojoj dokfoajeiojin djeiji djsi diajioweiwruoq\n'
    + 'asdlfkkoeko wiufajcm ododo eow djdiajcijso\n'
    + 'co eiaksk cciaheic kdkkq ddkkkscbdhu.',
    reply: [{
      user: {
        profile: user4Image,
        name: '박수정'
      },
      date: '2023.01.15',
      comment: 'adfpoajpojoj dokfoajeiojin djeiji djsi diajioweiwruoq\n'
      + 'asdlfkkoeko wiufajcm ododo eow djdiajcijso\n'
      + 'co eiaksk cciaheic kdkkq ddkkkscbdhu.',
    }]

  }
]

export const productTableData = [
  {
    date: '2023. 01. 07',
    state: '판매중',
    product_image: [Flower1],
    main_image: Flower1,
    images: [Flower1, Flower2, Flower3, Flower4, Flower5, Flower6],
    order_number: '220822A01',
    order_product: '장미안개 꽃다발',
    start_date: '2023. 01. 07',
    end_date: '2023.01.31',
    discount_rate: '10%',
    cost: '60,000원',
    discount_cost: '54,000원',
    payment: '10% 60,000원\n54,000원',
    goods: 108,
    review: 20,
    remain: 10,
    total: 20,
    comment: "핑크 튤립 + 안개 꽃의 조합입니다🌸\n사진은 보정하지 않습니다.\n꽃 컬러가 너무 예뻐요:)",
    barogo: true,
    delivery: true,
    pickup: true,
    category: '꽃 > 꽃다발',
    goodsInfo: goodsDemoData,
    reviewInfo : reviewDemoData,
  },
  {
    date: '2023. 01. 07',
    state: '판매중',
    product_image: [Flower1],
    main_image: Flower1,
    images: [Flower1, Flower2, Flower3, Flower4, Flower5, Flower6],
    order_number: '220822A01',
    order_product: '장미안개 꽃다발',
    start_date: '2023. 01. 07',
    end_date: '2023.01.31',
    discount_rate: '10%',
    cost: '60,000원',
    discount_cost: '54,000원',
    payment: '10% 60,000원\n54,000원',
    goods: 108,
    review: 20,
    remain: 10,
    total: 20,
    comment: "핑크 튤립 + 안개 꽃의 조합입니다🌸\n사진은 보정하지 않습니다.\n꽃 컬러가 너무 예뻐요:)",
    barogo: true,
    delivery: true,
    pickup: true,
    category: '꽃 > 꽃다발',
    goodsInfo: goodsDemoData,
    reviewInfo : reviewDemoData,
  },
  {
    date: '2023. 01. 07',
    state: '판매중',
    product_image: [Flower1],
    main_image: Flower1,
    images: [Flower1, Flower2, Flower3, Flower4, Flower5, Flower6],
    order_number: '220822A01',
    order_product: '장미안개 꽃다발',
    start_date: '2023. 01. 07',
    end_date: '2023.01.31',
    discount_rate: '10%',
    cost: '60,000원',
    discount_cost: '54,000원',
    payment: '10% 60,000원\n54,000원',
    goods: 108,
    review: 20,
    remain: 10,
    total: 20,
    comment: "핑크 튤립 + 안개 꽃의 조합입니다🌸\n사진은 보정하지 않습니다.\n꽃 컬러가 너무 예뻐요:)",
    barogo: true,
    delivery: true,
    pickup: true,
    category: '꽃 > 꽃다발',
    goodsInfo: goodsDemoData,
    reviewInfo : reviewDemoData,
  },
];

export const dashboardOrder = [
  {
    time: '9:00 am',
    content: [0, 1, 2]
  },
  {
    time: '10:00 am',
    content: [3, 4, 5, 6]
  },
];

export const orderDemoData = [
  {
    id: 0,
    time: '9:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: Flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 1,
    time: '9:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: Flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 2,
    time: '9:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: Flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 3,
    time: '10:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: Flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 4,
    time: '10:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: Flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 5,
    time: '10:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: Flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
  {
    id: 6,
    time: '10:00 am',
    trans_type: 0,
    new: 1,
    order: {
      number: '12305568',
      date: '2023.00.00',
      time: '01:00 pm',
      state: '준비중',
    },
    product: {
      image: Flower1,
      name: '장미안개꽃다발',
      number: '202212214R',
      option: ['[옵션] 01. 장미꽃 2송이 추가', '[옵션] 04. 안개꽃 색상 변경 (하늘)'],
      count: '1개',
      cost: '30,300원',
    },
    sender: {
      name: '김지민',
      number: '010-0000-0000',
      date: '2022.00.00 | 02:00 pm',
      comment: '예쁘게 부탁드려요:)',
    },
    receiver: {
      name: '이남지',
      number: "010-7162-4113",
      zipCode: "02512",
      address: '서울시 마포구 독막로 320 (태영빌딩)',
      detail_address: '102동 302호',
    },
    payment: {
      method: "카드결제",
      info: "비씨(5359************6517) 일시불",
      delivery: "3,000원",
      cost: "33,300원",
    },
    barogo: {
      point: '296,400원',
      rider_name: "김용진",
      rider_number: "010-0000-0000",
      total: '4,180원',
      distance: '1.4km',
      distance_fee: '3,000원',
      weather: '800원',
      vat: '380원',
    },
  },
];

export const chatData = [
  {
    date: '2022년 12월 15일 금요일',
    content: [{
      time: "오후 4:15",
      trans: 0,
      type: 1,
      image: Flower1,
      product: "장미안개꽃다발",
      discount: "10%",
      cost: "40,000",
      discount_cost: "36,000원",
      name: "아미화"
    },
    {
      time: "오후 4:15",
      trans: 0,
      type: 0,
      comment: '안녕하세요 아미화입니다.\n주문하신 장미안개꽃다발에 옵션을 추가하셨는데 장미재고가 부족하네요...\n정말 죄송합니다.\n\n혹시 다른 소재로 변경드려도 괜찮을까요?\n사진 보내드리겠습니다:)',
      name: "아미화"
    },
    {
      time: "오후 4:17",
      trans: 1,
      type: 0,
      comment: '네',
      name: "김지민"
    },
    {
      time: "오후 4:17",
      trans: 1,
      type: 0,
      comment: '괜찮습니다.',
      name: "김지민"
    },
    ]

  }
];

export const reviewData = [
  {
    id: 1,
    avatar: user1Image,
    name: '이남남',
    date: '25분전',
    text:
      '예약한 시간에 잘 받았습니다:)',
    status: 'new',
  },
  {
    id: 2,
    avatar: user2Image,
    name: '남남지',
    date: '30분전',
    text:
      '사진이랑 똑같아요 너무 예쁩니다! 배달로도 꽃 주문할 수 있어서 너무 좋아요.',
    status: 'new',
  },
];

export const counselData = [
  {
    id: 1,
    avatar: user1Image,
    name: '이남남',
    date: '25분전',
    text:
      '포트폴리오에 있는 꽃다발 문의드립니다.',
    status: '1',
  },
  {
    id: 2,
    avatar: user2Image,
    name: '남남지',
    date: '30분전',
    text:
      '분홍 장미 안개 꽃다발에 장미 꽃 추가할 수 있나요? 된다면 추가 금액은 얼마인가요?',
    status: '1',
  },
  {
    id: 3,
    avatar: user3Image,
    name: '남남',
    date: '1시간전',
    text:
      '픽업 예약관련 문의드립니다.',
    status: '2',
  },
];

export const plansData = [
  {
    id: 1,
    done: 1,
    description: '고터 꽃 사장님 연락',
    start: '9:00am',
  },
  {
    id: 2,
    done: 0,
    description: '고터 꽃 사장님 연락',
    start: '9:00am',
    end: '10:00am',
  },
  {
    id: 3,
    done: 1,
    description: '고터 꽃 사장님 연락',
    start: '9:00am',
  },
  {
    id: 4,
    done: 0,
    description: '고터 꽃 사장님 연락',
    start: '9:00am',
    end: '10:00am',
  },
  {
    id: 5,
    done: 0,
    description: '고터 꽃 사장님 연락',
    start: '11:00am',
    end: '12:00am',
  },
];

export const productsData = [
  {
    id: 1,
    image: product1Image,
    title: 'Admin Template',
    description: 'Responsive admin template...',
    right: '$36',
  },
  {
    id: 2,
    image: product2Image,
    title: 'Schedule App',
    description: 'Manage your schedule...',
    right: '$9',
  },
  {
    id: 3,
    image: product3Image,
    title: 'Chat App',
    description: 'Realtime chat application...',
    right: '$12',
  },
  {
    id: 4,
    image: product4Image,
    title: 'Wordpress Business Theme',
    description: 'Over 100+ templates and pages...',
    right: '$24',
  },
  {
    id: 5,
    image: product5Image,
    title: 'Camera App',
    description: 'Over 30+ filter...',
    right: '$6.99',
  },
  {
    id: 6,
    image: product6Image,
    title: 'Calendar App',
    description: 'Organize your schedule...',
    right: '$0.99',
  },
];

export const avatarsData = [
  {
    avatar: user1Image,
    name: 'Tom',
    date: '3 month ago',
  },
  {
    avatar: user2Image,
    name: 'Jenny',
    date: '1 year ago',
  },
  {
    avatar: user3Image,
    name: 'Sim',
    date: '2 hour ago',
  },
  {
    avatar: user4Image,
    name: 'Christine',
    date: 'a month ago',
  },
  {
    avatar: user5Image,
    name: 'Bread',
    date: '6 months ago',
  },
  {
    avatar: user6Image,
    name: 'Dan',
    date: '2 years ago',
  },
  {
    avatar: user7Image,
    name: 'Merry',
    date: '3 month ago',
  },
  {
    avatar: user8Image,
    name: 'John',
    date: '1 month ago',
  },
  {
    avatar: user9Image,
    name: 'Shane',
    date: '7 month ago',
  },
  {
    avatar: user10Image,
    name: 'Star',
    date: '1 year ago',
  },
  {
    avatar: user11Image,
    name: 'Jenny',
    date: '3 month ago',
  },
  {
    avatar: user12Image,
    name: 'Park',
    date: '4 month ago',
  },
  {
    avatar: user13Image,
    name: 'Dave',
    date: '9 month ago',
  },
  {
    avatar: user14Image,
    name: 'Jackson',
    date: '10 month ago',
  },
];

export const userProgressTableData = [
  {
    avatar: user1Image,
    name: 'Tom',
    date: '3 month ago',
    progress: 75,
  },
  {
    avatar: user2Image,
    name: 'Jenny',
    date: '1 year ago',
    progress: 60,
  },
  {
    avatar: user3Image,
    name: 'Sim',
    date: '2 hour ago',
    progress: 50,
  },
  {
    avatar: user4Image,
    name: 'Christine',
    date: 'a month ago',
    progress: 40,
  },
  {
    avatar: user5Image,
    name: 'Bread',
    date: '6 months ago',
    progress: 30,
  },
  {
    avatar: user6Image,
    name: 'Dan',
    date: '2 years ago',
    progress: 25,
  },
];

export const supportTicketsData = [
  {
    id: 1,
    avatar: user1Image,
    name: 'Sim',
    date: '30 mins ago',
    text:
      'Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.',
    status: 'pending',
  },
  {
    id: 2,
    avatar: user2Image,
    name: 'Jane',
    date: '1 hour ago',
    text:
      'Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.',
    status: 'open',
  },
  {
    id: 3,
    avatar: user3Image,
    name: 'Tom',
    date: 'yesterday',
    text:
      'Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.',
    status: 'closed',
  },
];

export const todosData = [
  { id: 1, title: 'task -1', done: true },
  { id: 2, title: 'task -2', done: false },
  { id: 3, title: 'task -3', done: true },
  { id: 4, title: 'task -4', done: true },
  { id: 5, title: 'task -5', done: false },
];

export const chartjs = {
  bar: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Expense for this year',
          backgroundColor: '#6a82fb',
          stack: 'Expense',
          data: [10000, 30000, 50000, 80000, 60000, 20000, 10000],
        },
        {
          label: 'Expense for last year',
          backgroundColor: '#fc5c7d',
          stack: 'Expense',
          data: [30000, 80000, 50000, 100000, 60000, 40000, 90000],
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: 'Chart.js Bar Chart - Stacked',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
        yAxes: [
          {
            stacked: true,
            display: false,
          },
        ],
      },
    },
  },
  doughnut: {
    data: {
      datasets: [
        {
          data: [20, 30, 40, 50, 60],
          backgroundColor: [
            '#6a82fb',
            '#fc5c7d',
            '#45b649',
            '#00c9ff',
            '#ffd700',
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart',
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  },
  line: {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue for this year',
          borderColor: '#6a82fb',
          backgroundColor: '#6a82fb',
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },

        {
          label: 'Revenue for last year',
          borderColor: '#fc5c7d',
          backgroundColor: '#fc5c7d',
          data: [0, 1300, 2200, 3400, 4600, 3500, 3000],
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart - Stacked Area',
      },
      tooltips: {
        intersect: false,
        mode: 'nearest',
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: 'Month',
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  },
};
