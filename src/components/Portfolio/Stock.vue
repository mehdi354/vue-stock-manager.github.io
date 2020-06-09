<template>
	<div class="col-md-4 my-3">
		<div class="card">
			<div class="card-header bg-success">
				<h6 class="card-title text-white">
					{{stock.name | capital}} 
					<small class="float-right">
						<span>Price: <strong>{{stock.price | price-format }} </strong></span> | 
						<span>Quantity: <strong>{{stock.quantity}} </strong></span>
					</small>
				</h6>
			</div>
			<div class="card-body">
				<div class="float-left">
					<input type="number" 
							class="form-control" 
							:class = "{danger: insufficiantFunds}" 
							v-model="quantity">
				</div>
				<div class="float-right">
					<button 
						class="btn btn-success"
						:disabled = "insufficiantFunds || quantity <= 0"
						@click="sellStock"
						>
						{{ insufficiantFunds ? 'Insufficiant' : 'Sell'}}
						</button>
				</div>
			</div>
			</div>
	</div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
	props: ['stock'],
	data(){
		return{
			quantity: 0
		}
	},
	methods : {
		...mapActions(
			{placeSellOrder:'sellStock'}
		),
		sellStock(){
			const product = {
				stockId: this.stock.id,
				quantity: parseInt(this.quantity),
				stockPrice:this.stock.price
			};
			console.log(product);
			this.placeSellOrder(product);
			this.quantity = 0;
		}
	},
	computed :{
		funds(){
			return this.$store.getters.funds;
		},
		insufficiantFunds(){
			return this.quantity > this.stock.quantity;
		}
	},
}
</script>