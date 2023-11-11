import React from "react";
import "./CardCart.css";

export default function CardCart(props) {
    const totalPrice = props.quantity * props.price;

    const handleDelete = async (userId, itemId) => {
        try {
            const response = await api.delete(`/cart/remove-from-cart/${userId}/${itemId}`);

            if (response.status === 200) {
                toast.success('Item removido do carrinho!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });
            }

            setItems(items.filter(item => item.id !== itemId));
        } catch (error) {
            console.log(error);
        }
    };

    async function increaseCartItem(userId, itemId) {
        try {
            const response = await api.put(`/cart/increase-cart-item/${userId}/${itemId}`);
            console.log(response);

            await fetchItems();

        } catch (error) {
            console.log(error);
        }
    }

    async function decreaseCartItem(userId, itemId) {
        try {
            const currentItem = items.find(item => item.id === itemId);

            if (currentItem.quantity > 1) {
                const response = await api.put(`/cart/decrease-cart-item/${userId}/${itemId}`);
                console.log(response);

                await fetchItems();
            } else {
                const confirmation = window.confirm(
                    'Tem certeza que deseja remover este item do carrinho?'
                );

                if (confirmation) {
                    handleDelete(userId, itemId);
                    await fetchItems();
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="cart-items" key={props.id}>
            {/* {props.image && <img src={props.image} alt="snack" />} */}
            <div className="cart-items-description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>

            <div className="qntd">

                <button
                    className="qntd-button"
                    onClick={props.onIncreaseCartItem}
                >
                    +
                </button>

                <h1>{props.quantity}</h1>

                <button
                    className="qntd-button"
                    onClick={props.onDecreaseCartItem}
                >
                    -
                </button>
            </div>

            <div className="price-container">
                <h3>R$ {props.quantity * props.price}</h3>
            </div>

            <div className="remove-button-container" >
                <button
                    className="remove-button"
                    onClick={props.onHandleDelete}
                >
                    Remover
                </button>
            </div>

        </div >
    )
}