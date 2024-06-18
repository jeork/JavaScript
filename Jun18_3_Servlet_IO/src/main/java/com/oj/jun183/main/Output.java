package com.oj.jun183.main;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@WebServlet("/Output")
public class Output extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8");
		String path = request.getServletContext().getRealPath("img");
		System.out.println(path);

		MultipartRequest mr = new MultipartRequest(request, path, 30 * 1024 * 1024, "UTF-8",
				new DefaultFileRenamePolicy());
		String name = mr.getParameter("name");
		double height = Double.parseDouble(mr.getParameter("height"));
		double weight = Double.parseDouble(mr.getParameter("weight"));
		height /= 100;
		double bmi = weight / (height * height);
		String result = "저체중";
		if (bmi >= 40) {
			result = "고도비만";
		} else if (bmi >= 35) {
			result = "중증도비만";
		} else if (bmi >= 30) {
			result = "경도비만";
		} else if (bmi >= 25) {
			result = "과체중";
		} else if (bmi >= 18.5) {
			result = "정상";
		}
		height *= 100;
		String image = mr.getFilesystemName("photo");
		image = URLEncoder.encode(image, "UTF-8");
		image = image.replace("+", " ");

		PrintWriter out = response.getWriter();

		out.print("<html>");
		out.print("<head><meta charset=\"UTF-8\"><title>BMI Calculator</title></head>");
		out.print("<body>");
		out.printf("<p>이름 : %s</p>", name);
		out.printf("<p>키 : %.1fcm</p>", height);
		out.printf("<p>몸무게 : %.1fkg</p>", weight);
		out.printf("<p>bmi : %.2f</p>", bmi);
		out.printf("<h2>당신은 %s 입니다</h2>", result);
		out.printf("<img src = 'img/%s' style = 'max-width:400px'>", image);

		out.print("</body>");
		out.print("</html>");

	}

}
