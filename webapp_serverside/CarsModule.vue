<template>
  <div>
    <h1>{{ msg }}</h1>
    <p style="text-align:left">
        ACTION: {{ action }}<br/>
        ID: {{ id }}<br/>
        <a href="/cars/list/all">&raquo; Back to list</a><br/>
        <a href="/cars/edit/0">&raquo; Add new car</a>
    </p>
 
    <table v-if="action === 'show'" class="table table-striped table-bordered table-hover">
      <tbody>
        <tr><td>ID:</td><td> {{ oneCar.car_id }} </td></tr>
        <tr><td>Brand:</td><td> {{ oneCar.car_brand }} {{ oneCar.brand_name }} </td></tr>
        <tr><td>Model:</td><td> {{ oneCar.car_name  }} </td></tr>
        <tr><td>Baseprice:</td><td> {{ oneCar.car_baseprice  }} </td></tr>
        <tr><td>Fancy?</td>
            <td> {{  oneCar.car_isFancy }}  {{ oneCar.car_isFancy ? "YES" : "NO" }} </td></tr>
        <tr><td>Total price:</td><td> {{  oneCar.car_realprice  }} </td></tr>
      </tbody>
    </table>
 
    <form v-if="action === 'edit'" >
      <table class="table table-striped table-bordered table-hover">
          <tbody>
          <tr><td>Brand:</td>
              <td>
                <select name='car_brand' v-model='oneCar.car_brand'>
                  <option v-for="b of brands" v-bind:key="b.brand_id" :value="b.brand_id">{{ b.brand_name }}</option>
                </select>
              </td></tr>
          <tr><td>Model:</td>
              <td>
                <input type='text' name='car_name' v-model='oneCar.car_name' /></td></tr>
          <tr><td>Baseprice:</td>
              <td><input type='number' name='car_baseprice' v-model='oneCar.car_baseprice' /></td></tr>
          <tr><td>Fancy?</td>
              <td><input type='checkbox' name='car_isFancy' value='1' v-model="oneCar.car_isFancy" /></td></tr>
          <tr><td>Total price:</td>
              <td><input type='number' name='car_realprice' v-model='oneCar.car_realprice' /></td></tr>
          <tr><td colspan='2'> <input type="button" @click="sendEditRequest()" value="SEND" /> </td></tr>
          </tbody>
      </table>
    </form>
 
    <table v-if="action === 'list'" class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <td>ID</td>
                <td>Brand</td>
                <td>Model</td>
                <td>Show</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="c of cars" v-bind:key="c.car_id">
                <td>{{ c.car_id }}</td>
                <td>{{ c.brand_name }}</td>
                <td>{{ c.car_name }}</td>
                <td><a :href="'/cars/show/' + c.car_id">Show</a></td>
                <td><a :href="'/cars/edit/' + c.car_id">Edit</a></td>
                <td><input type="button" @click="sendDelRequest(c.car_id)" value="Delete" /></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
 
<script>
export default {
  name: 'Cars',
  props: ['action', 'id'],
  data () {
    return {
      msg: 'Wololo',
      cars: [],
      brands: [],
      oneCar: {
            "car_id": 0,
            "car_brand": 0,
            "car_name": "XXXX",
            "car_baseprice": 0,
            "car_isFancy": 0,
            "car_realprice": 0
        }
    }
  },
  methods: {
    async getAllData() {
      try {
        // JSON responses are automatically deserialized.
        this.cars = await this.sendWebRequest("http://localhost:9000/carsapi/list");
        this.brands = await this.sendWebRequest("http://localhost:9000/carsapi/brands");
        // this.cars = responseCars.data; ONLY WITH AXIOS - remove everywhere
        // this.brands = responseBrands.data; ONLY WITH AXIOS
        console.log(this.cars);
        
 
        let response = await this.sendWebRequest("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.title);
        /*
        this.brands = [ 
          {"brand_id": 1, "brand_name": "BMW" }, 
          {"brand_id": 2, "brand_name": "Audi" },
          {"brand_id": 3, "brand_name": "Citroen" } 
        ];
        this.cars = [ 
                        { "car_id": 1, "car_brand": 2, "brand_name": "Audi", "car_name": "S4", "car_baseprice": 40000, "car_isFancy": 0, "car_realPrice": 45000 }, 
                        { "car_id": 2, "car_brand": 1, "brand_name": "BMW", "car_name": "i8", "car_baseprice": 80000, "car_isFancy": 1, "car_realPrice": 89000 }, 
                    ];
        */
        this.refreshOneCar();
      } catch (error) {
        console.log(error);
      }
    },
    async refreshOneCar() {
      try {
        if (this.$props.id==="all" || this.$props.id==="0") return;
        
        let responseCar = await this.sendWebRequest("http://localhost:9000/carsapi/show/"+this.$props.id);
        this.oneCar = responseCar;
        
        // this.oneCar = this.cars.find( (car) => car.car_id == this.$props.id);
      } catch (error) {
        console.log(error);
      }
    },
    async sendDelRequest(carId) {
      alert(carId);
      try {
        let responseCar = await this.sendWebRequest("http://localhost:9000/carsapi/del/"+carId);
        alert("DELETED: " + responseCar.rowsDeleted);
        this.getAllData();
      } catch (error) {
        console.log(error);
      }
    },
    async sendEditRequest() {
      alert(this.oneCar.car_id);
      const response = await this.sendWebRequest("http://localhost:9000/carsapi/update/"+this.oneCar.car_id, "POST", this.oneCar);
      console.log(response);
      alert("EDITED: " + response.rowsUpdated);
      this.$router.push({path: '/cars'});
      this.getAllData();
    },
    async sendWebRequest(url, methodParam = "GET", bodyObjParam = null) {
      try {
        const response = await fetch(url, {
            credentials: "include",
            method: methodParam,
            body: bodyObjParam == null ? null : JSON.stringify(bodyObjParam),
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log("<FETCH>");
        console.log(result);
        console.log("</FETCH>");
        return result;
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  watch: { 
    id: function(newVal, oldVal) { // watch id changes
      this.refreshOneCar();
      //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  }, 
  created() {
    this.getAllData();
  },
};
</script>
 
<style scoped>
#app table { width:95%; margin:20px; }
#app td { text-align: left;}
</style>