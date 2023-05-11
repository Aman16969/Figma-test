const SelectSearch = () => {
    return ( <>
    <select
                    name=""
                    id=""
                    className="ticket"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.44)" }}
                  >
                    <option value="ticketNo">Ticket No</option>
                    <option value="title">Title</option>
                    <option value="environment">Environment</option>
                    <option value="status">Status</option>
                    <option value="priority">Priority</option>
                    <option value="time">Time</option>
                  </select>

                  <input type="text" placeholder="" name="search" /></> );
}
 
export default SelectSearch;