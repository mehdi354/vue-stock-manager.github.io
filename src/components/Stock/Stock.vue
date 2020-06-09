<template>
	<div class="col-md-4 my-3">
		<div class="card">
			<div class="card-header bg-success">
				<h6 class="card-title text-white">
					{{stock.name | capital}} 
					<small class="float-right">
						<span>Price: <strong>{{stock.price | price-format}} </strong></span>
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
						class="btn btn-success btn-sm"
						:disabled = "insufficiantFunds || quantity <= 0"
						@click="buyStock"
						>
						{{ insufficiantFunds ? 'Insufficiant' : 'Buy'}}
						</button>
				</div>
			</div>
			</div>
	</div>
</template>
<script>
export default {
	props: ['stock'],
	data(){
		return{
			quantity: 0
		}
	},
	computed :{
		funds(){
			return this.$store.getters.funds;
		},
		insufficiantFunds(){
			return this.funds < (this.stock.price * this.quantity);
		}
	},
	methods : {
		buyStock(){
			const product = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity : parseInt(this.quantity)
			};
			console.log(product);
			this.$store.dispatch('buyStock', product);
			this.quantity = 0;
				
		},
	}
}
</script>