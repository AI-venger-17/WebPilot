import streamlit as st
import requests

st.set_page_config(page_title="MCP Web Assistant", layout="centered")

st.title("🕵️ MCP Web Assistant")
query = st.text_input("Enter your query")

if st.button("Submit") and query:
    with st.spinner("Thinking..."):
        try:
            response = requests.post("http://localhost:9090/api/search", json={"query": query})
            if response.status_code == 200:
                result = response.json()
                st.subheader("🔎 Search Result")
                st.write(result.get("output", "No output received"))
            else:
                st.error(f"Error {response.status_code}: {response.text}")
        except Exception as e:
            st.error(f"Failed to connect to backend: {e}")
