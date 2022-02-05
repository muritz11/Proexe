
const initialState = {
    orderHistory: [
        {
            id: "00994466",
            userId: 1,
            riderName: "Bassie Cooper",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            status: "Ongoing"
        },
        {
            id: "00994466",
            userId: 1,
            riderName: "Bassie Cooper",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            status: "Complete"
        },
        {
            id: "00994466",
            userId: 1,
            riderName: "Bassie Cooper",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            status: "Complete"
        },
        {
            id: "00994466",
            userId: 1,
            riderName: "Bassie Cooper",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            status: "Complete"
        },
        {
            id: "00994466",
            userId: 1,
            riderName: "Bassie Cooper",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            status: "Cancelled"
        },
    ],
    rideHistory: [
        {
            id: "00994466",
            riderId: 1,
            userName: "Bassie Cooper",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            fareAmount: "1000",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            Payment: "Cash",
            status: "Ongoing"
        },
        {
            id: "00994466",
            riderId: 1,
            userName: "Bassie Cooper",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            fareAmount: "1000",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            Payment: "POS",
            status: "Complete"
        },
        {
            id: "00992022",
            riderId: 1,
            userName: "Brad Cooper",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            fareAmount: "1000",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            Payment: "Cash",
            status: "Complete"
        },
        {
            id: "00994466",
            riderId: 1,
            userName: "Bassie Cooper",
            time: "9:45 AM",
            date: "Mar 16, 2022",
            fareAmount: "1000",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            Payment: "POS",
            status: "Complete"
        },
        {
            id: "00992022",
            riderId: 1,
            userName: "Brad Cooper",
            time: "9:45 AM",
            date: "Feb 26, 2021",
            fareAmount: "1000",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            Payment: "Cash",
            status: "Cancelled"
        },
    ],
    cancelledOrders: [
        {
            id: "00994466",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            by: "user",
            reason: "User declined",
        },
        {
            id: "00994422",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            by: "rider",
            reason: "Service not needed",
        },
        {
            id: "00994466",
            time: "9:45 AM",
            date: "Feb 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            by: "user",
            reason: "Service not needed",
        },
        {
            id: "00994422",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            by: "rider",
            reason: "Rider declined",
        },
        {
            id: "00994466",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            by: "user",
            reason: "User declined",
        },
        {
            id: "00994466",
            time: "9:45 AM",
            date: "Mar 26, 2022",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            by: "user",
            reason: "Service not needed",
        },
        {
            id: "00994466",
            time: "9:45 AM",
            date: "Aug 26, 2021",
            pickUpAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            dropOffAddress: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
            by: "user",
            reason: "Service not needed",
        },
    ],
}

export const orderHistoryReducer = (state = initialState) => {
    return state
}
