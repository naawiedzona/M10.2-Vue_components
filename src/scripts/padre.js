import Hijo from "./Hijo.vue";
export default {
  data() {
    return {
      hijos: [
        {
          id: "1",
          title: "Item1",
        },
        {
          id: "2",
          title: "Item2",
        },
        {
          id: "3",
          title: "Item3",
        },
      ],
    };
  },
  components: {
    Hijo,
  },
};
